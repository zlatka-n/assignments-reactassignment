import axios from 'axios';
import { Todo, GetTodoItems } from '../types';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
})

export const getTodoItems = async() => {

    try {
        const { data } = await axiosInstance.get<GetTodoItems>(`/items`)
        return data
    } catch (err: any) {
        console.warn(err)
        throw err
    }
}

export const postTodo = async(requestBody: Todo) => {

    try {
        await axiosInstance.post<Todo>(`/items`, requestBody)
    } catch (err: any) {
        console.warn(err)
        throw err
    }
}

export const patchTodo = async(requestBody: Todo, id: number) => {

    try {
        await axiosInstance.patch<Todo>(`/items/${id}`, requestBody)
    } catch (err: any) {
        console.warn(err)
        throw err
    }
}

export const deleteTodo = async(id: number) => {

    try {
        await axiosInstance.delete(`/items/${id}`)
    } catch (err: any) {
        console.warn(err)
        throw err
    }
}

export const postDoneTodo = async(requestBody: Todo) => {
    try {
        await axiosInstance.post<Todo>(`/done`, requestBody)
    } catch (err: any) {
        console.warn(err)
        throw err
    }
}

export const deleteTodoFromDone = async(id: number) => {
    try {
        await axiosInstance.delete<Todo>(`/done/${id}`)
    } catch (err: any) {
        console.warn(err)
        throw err
    }
}