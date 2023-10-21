<template>
  <div class="mt-3 mx-auto font-mono text-center border-blue-600 border-2 w-1/4">
    <p class="text-center mt-5 text-5xl">Comment</p>
    <br>
    <p class="text-3xl">Student:</p>
    <select v-model="selectedStudent" class="border-black border-2 w-96 h-10 text-xl">
      <option value="" disabled>Select Student</option>
    </select>
    <br>    
    <br>
    <p class="text-3xl">Comment:</p>
    <input v-model="comment" class="border-black border-2 p-2.5 h-20 mb-5 w-96 text-xl"/>
    <br>
    <button @click="submitComment" class="mt-1 mb-3 px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
  </div>
</template>

<!-- textarea {
  width: 95%;
  height: 70px;
  padding: 10px;
  font-size: 20px;
  margin-bottom: 20px;
} -->

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const selectedStudent = ref('');
const students = ref([]);
const comment = ref('');

onMounted(async () => {
  try {
    const response = await axios.get('db.json');
    students.value = response.data.student;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const submitComment = () => {
  // Do something with the selectedStudent and comment values, like sending to a server
  console.log('Selected Student:', selectedStudent.value);
  console.log('Comment:', comment.value);
  // Reset the form
  selectedStudent.value = '';
  comment.value = '';
};
</script>

<style>
/* Add your styles here */
</style>
