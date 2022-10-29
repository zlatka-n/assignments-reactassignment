import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { useEffect, useMemo, useState } from 'react';
import { getTodoItems } from "./api/axios";
import { TodoItems } from "./types";
import { ListItem } from "./components/ListItem";
import { useHandleOpen } from "./hooks/useHandleOpen";

export const App: React.FC = () => {
    const [todos, setTodos] = useState<TodoItems>()

    useEffect(() => {
    
        const interval = setInterval(()=>{
            getTodoItems().then(response => {
                setTodos(response)
            })
        },2000)
       
        return() => clearInterval(interval)
    }, [])

    const numberOfDone = useMemo(() => todos?.filter(item => item.done).length, [todos])

    const numberOfTodo = useMemo(() => {
        if (!todos || !numberOfDone) return

        return todos?.length - numberOfDone
    }, [todos])

    const sortedTodos = useMemo(() => todos?.sort((x, y) => (x.done === y.done)? 0 : x.done? 1 : -1 && y.createdAt - x.createdAt), [todos])

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header handleAddItem={useHandleOpen}>Todo App</Header>
                    <List>
                        {sortedTodos?.map(item => <ListItem label={item.title} key={item.id} todoId={item.id} checked={item.done} handleEdit={() => alert('todo edit')}  handleRemoval={() => alert('todo remove')}/>)}
                    </List>
                    <Footer todoItems={numberOfTodo} doneItems={numberOfDone}/>
                </Layout>
            </Container>
        </ThemeProvider>
    )
}