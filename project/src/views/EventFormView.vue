<script setup lang="ts">
import type { StudentItem } from '@/type'
import { ref } from 'vue'
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
        <h1>Add New Student</h1>
        <form>
            <label>Name</label>
            <input v-model="student.name" type="text" placeholder="Name" class="field"/>

            <label>Surname</label>
            <input v-model="student.surname" type="text" placeholder="Surname" class="field"/>

            <label>Add Image</label>
            <input v-model="student.name" type="text" placeholder="Image" class="field"/>
            <button type="submit">Add New Student</button>
        </form>

        <pre>{{ student }}</pre>
    </div>
</template>