<script setup lang="ts">
import type { StudentItem } from '@/type'
import { ref } from 'vue'
import StudentService from '@/services/StudentService';
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';
import BaseInput from '@/components/BaseInput.vue';
const store = useMessageStore()
const student = ref<StudentItem>({
    id: 0,
    name: '',
    surname: '',
    course: '',
    image: '',
    advisorID: 0,
})

const router = useRouter()
function saveStudent() {
    StudentService.saveStudent(student.value)
    .then((response) => {
        console.log(response.data)
        router.push({
            name: 'student-detail',
            params: { id:response.data.id }
        })
        store.updateMessage('You are successfully adding a new student named ' + response.data.name + response.data.surname)
        setTimeout(() => {
            store.resetMessage()}, 3000)
    })
}
</script>
<template>
    <div class="font-mono py-4">
        <div class="text-center text-4xl font-bold">Add New Student</div>
        <form class="py-6 px-96 text-3xl" @submit.prevent="saveStudent">
            <div class="pt-4 mb-4">
                <label class="block text-zinc-700 font-bold mb-2">Name:</label>
                <BaseInput v-model="student.name" type="text" label="Name" class="w-6/12 border-gray-600 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
            </div>
            <div class="mb-4">
                <label class="block text-zinc-700 font-bold mb-2">Surname:</label>
                <BaseInput v-model="student.surname" type="text" label="Surname" class="w-6/12 border-gray-600 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
            </div>
            <div class="mb-4">
                <label class="block text-zinc-700 font-bold mb-2">Student ID:</label>
                <BaseInput v-model="student.id" type="text" label="Student ID" class="w-6/12 border-gray-600 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
            </div>
            <button class="mb-4 bg-red-600 hover:shadow-grey-300 hover:shadow-lg hover:font-bold text-white py-2 px-4 rounded-3xl" type="submit">Add</button>
        </form>
    </div>
</template>