import axios from 'axios';
import { PostTodo, TodoItems } from '../types';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
})

export const getTodoItems = async() => {

    try {
        const { data } = await axiosInstance.get<TodoItems>(`/items`)
        return data
    } catch (err: any) {
        console.warn(err)
        throw err
    }
}

export const postTodo = async(requestBody: PostTodo) => {

    try {
        await axiosInstance.post<PostTodo>(`/items`, requestBody)
    } catch (err: any) {
        console.warn(err)
        throw err
    }
}

export const patchTodo = async(requestBody: Omit<PostTodo, 'done'>, id: number) => {

    try {
        await axiosInstance.patch<Omit<PostTodo, 'done'>>(`/items/${id}`, requestBody)
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