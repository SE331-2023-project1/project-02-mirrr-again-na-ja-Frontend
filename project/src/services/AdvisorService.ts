import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'
import type { AdvisorItem } from '@/type'
const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost:3004',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getAdvisor(): Promise<AxiosResponse<AdvisorItem[]>> {
        return apiClient.get<AdvisorItem[]>('/advisor')
    },
    getAdvisorById(id: number): Promise<AxiosResponse<AdvisorItem>>{
        return apiClient.get<AdvisorItem>('advisor/'+ id.toString())
    }
}