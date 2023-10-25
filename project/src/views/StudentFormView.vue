<script setup lang="ts">
import type { StudentItem } from '@/type';
import { ref } from "vue";
import StudentService from '@/services/StudentService';
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';

const store = useMessageStore()

const router = useRouter()
function saveStudent() {
    StudentService.saveStudent(student.value)
        .then((response) => {
            console.log(response.data)
            router.push({
                name: 'student-detail',
                params:{ id: response.data.id}
            })
            store.updateMessage('You are successfully add a new student for ' + response.data.name)
            setTimeout(() => {
                store.resetMessage()
            }, 3000)
        }).catch(() => {
            router.push({ name: 'network-error'})
        })
}
const student = ref<StudentItem>({
    id: 0,
    name: '',
    surname: '',
    course: '',
    image: '',
    advisorID: 0
})
</script>

<template>
    <div>
        <h1>Create Student</h1>
        <form @submit.prevent="saveStudent">
            <label>Name</label>
            <input
                v-model="student.name"
                type="text"
                placeholder="Name"
                class="field"
            />

            <label>Surname</label>
            <input
                v-model="student.surname"
                type="text"
                placeholder="Surname"
                class="field"    
            />

            <label>Course</label>
            <input
                v-model="student.course"
                type="text"
                placeholder="Course"
                class="field"
            />

            <label>Image</label>
            <input
                v-model="student.image"
                type="text"
                placeholder="Image"
                class="field"
            />
            <button type = "submit">Submit</button>
        </form>

        <pre>{{ student }}</pre>
    </div>

</template>