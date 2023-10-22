<template>
  <div class="absolute mt-20 mx-auto px-12 py-12 font-mono border-blue-600 border-2 w-1/3 right-0 left-0">
    <p class="text-center text-4xl">Announcement</p>
    <br>
<!--    <p class="text-3xl">Student:</p>-->
<!--    <select v-model="selectedStudent" class="border-black border-2 w-96 h-10 text-xl">-->
<!--      <option value="" disabled>Select Student</option>-->
<!--    </select>-->
<!--    <br>-->
<!--    <br>-->
    <p class="text-left">Description:</p>
    <div class="text-center">
      <input v-model="comment" class="border-black border-2 h-10 w-full text-xl align-text-top"/><br>
    </div>
    <div class="text-right mt-1 mx-3"><button class="border-2 px-1 rounded-md">add file</button></div>

    <br><br>
    <div class="text-center">
      <button @click="submitComment" class="mt-1 px-20 py-2 bg-blue-500 text-white rounded">Submit</button>
    </div>
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