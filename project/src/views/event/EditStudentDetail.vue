<script lang ="ts">
import { defineComponent } from 'vue';
import type { StudentItem } from '@/type';
import StudentService from '@/services/StudentService';
import ResponseData from '@/types/ResponseData';

export default defineComponent({
    name: "student",
    data() {
        return {
            currentStudent: {} as StudentItem,
            message: "",
        };
    },
    methods: {
        getStudent(id: any) {
            StudentService.getStudentById(id).then((response: ResponseData) => {
                this.currentStudent = response.data;
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            });
        },
        updateStudent() {
            let data = {
                id: this.currentStudent.id,
                name: this.currentStudent.name,
                surname: this.currentStudent.surname,
                course: this.currentStudent.course,
                image: this.currentStudent.image,
                advisor: this.this.currentStudent.advisorID
            }
        },
        StudentService.updateStudentById(this.currentStudent.id, data)
        .then((response: ResponseData) => {
            console.log(response.data);
            this.message = "The Adviser Information was updated successfully!";
            setTimeout(() => {
                this.message = "";
            }, 3000);
        })
        .catch((e: Error) => {
            console.log(e);
        }),
    },
    mounted() {
    this.message = "";
    this.getStudet(this.$route.params.id);
  },
});
</script>

<!--Template-->
<template>
    <div v-if="student">
        <div class="m-5">
            <div class="font-mono text-3xl mx-auto border-2 bg-gradient-to-r bg-green-700 h-50 w-1/2 flex md:flex-row gap-2 flex-col p-3 rounded-md">
                <div class="border-green-700 border-2 h-55 w-80 flex flex-col items-center rounded-md">
                    <img :src="student.image" class="object-scale-down rounded-md">
                </div>
                <div class="pl-2 border-2 bg-white h-50 w-full flex flex-col items-left rounded-md">        
                    <p>Name: {{ student.name }}</p>
                    <p><input class="border-black border-2 mt-4 w-72 h-10 text-xl" type="username" placeholder="{{ student.name }}"/></p>
                    <p>Surname: {{ student.surname }}</p>
                </div>
            </div>

        </div>
    </div>
</template>