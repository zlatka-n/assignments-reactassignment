export type GetTodoItems = {
    title: string,
    done: boolean,
    createdAt: number,
    id: number
}[]

export type Todo = {
    title?: string
    done?: boolean | string
    id?: number
}