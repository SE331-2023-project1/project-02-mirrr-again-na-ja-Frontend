import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { StudentItem } from '@/type'
const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getStudent(perPage: number, page: number): Promise<AxiosResponse<StudentItem[]>> {
        return apiClient.get<StudentItem[]>('/student?_limit=' + perPage + '&_page=' + page)
    },
    getStudentById(id: number): Promise<AxiosResponse<StudentItem>>{
        return apiClient.get<StudentItem>('student/' + id.toString())
    },
    updateStudentById(id: any, student: any): Promise<AxiosResponse<StudentItem>> {
        return apiClient.put<StudentItem>("/student/" + id.toString(), student);
    }    
}

