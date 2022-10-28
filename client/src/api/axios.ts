import axios from 'axios';
import { TodoItems } from '../types';

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