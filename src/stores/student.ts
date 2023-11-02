import type { StudentItem, AdviserItem } from "@/type";
import { defineStore } from "pinia";
export const useStudentStore = defineStore('student',{
    state: () => ({
        student: null as StudentItem | null,
        professer: null as AdviserItem | null
    }),
    actions: {
        setStudent(student: StudentItem) {
            this.student = student
        },
        setAdviser(professer: AdviserItem ){
            this.professer = professer
        }
    }
})