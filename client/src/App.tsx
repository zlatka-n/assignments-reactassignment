import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { useEffect, useMemo, useState } from "react";
import { getTodoItems } from "./api/axios";
import { GetTodoItems } from "./types";
import { ListItem } from "./components/ListItem";
import { useHandleOpen } from "./hooks/useHandleOpen";

export const App: React.FC = () => {
    const [todos, setTodos] = useState<GetTodoItems>([]);

    useEffect(() => {
        getTodoItems().then((response) => {
            setTodos(response);
        });
    }, []);

    const getNewData = (newData: GetTodoItems) => {
        setTodos(newData);
    };

    const numberOfDone = todos?.filter((item) => item.done).length;
    const numberOfTodos = todos?.length && numberOfDone ? todos?.length - numberOfDone : todos?.length;

    const sortedTodos = useMemo(
        () => todos?.sort((x, y) => (x.done === y.done ? 0 : x.done ? 1 : -1 && y.createdAt - x.createdAt)),
        [todos]
    );

    return (
        <ThemeProvider>
            <Container>
                <Layout>
                    <Header handleAddItem={useHandleOpen} getNewData={getNewData}>
                        Todo App
                    </Header>
                    <List>
                        {sortedTodos?.map((item) => (
                            <ListItem label={item.title} key={item.id} todoId={item.id} defaultChecked={item.done} getNewData={getNewData}/>
                        ))}
                    </List>
                    <Footer todoItems={numberOfTodos} doneItems={numberOfDone} />
                </Layout>
            </Container>
        </ThemeProvider>
    );
};
