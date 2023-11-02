import type { AxiosResponse } from "axios";
import type { StudentItem, AdviserItem } from "@/type";
import apiClient from "./AxiosClient";

export default {
  getStudent(
    perPage: number,
    page: number
  ): Promise<AxiosResponse<StudentItem[]>> {
    return apiClient.get<Array<StudentItem>>(
      "/students?_limit=" + perPage + "&_page=" + page
    );
  },
  getStudentById(id: number): Promise<AxiosResponse<StudentItem>> {
    return apiClient.get<StudentItem>("/students/" + id.toString());
  },
  getAdviser(
    perPage: number,
    page: number
  ): Promise<AxiosResponse<AdviserItem[]>> {
    return apiClient.get<Array<AdviserItem>>(
      "/advisors?_limit=" + perPage + "&_page=" + page
    );
  },
  getAdviserById(id: number): Promise<AxiosResponse<AdviserItem>> {
    return apiClient.get<AdviserItem>("/advisors/" + id.toString());
  },
  getStudentByKeyword(
    keyword: string,
    perPage: number,
    page: number
  ): Promise<AxiosResponse<StudentItem[]>> {
    return apiClient.get<StudentItem[]>(
      "/students?title=" + keyword + "&_limit=" + perPage + "&_page=" + page
    );
  },
  saveStudent(student: StudentItem): Promise<AxiosResponse<StudentItem>> {
    return apiClient.post<StudentItem>("/students", student);
  },
  updateStudentById(
    id: any,
    student: any
  ): Promise<AxiosResponse<StudentItem>> {
    return apiClient.put<StudentItem>("/students/" + id.toString(), student);
  },
  getStudents(): Promise<AxiosResponse<StudentItem[]>> {
    return apiClient.get<StudentItem[]>("/students");
  },
};
