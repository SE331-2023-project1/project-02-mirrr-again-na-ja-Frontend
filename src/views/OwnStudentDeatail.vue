<template>
  <div class="flex justify-center items-center">
    <div class="text-center">
      <h1 class="text-2xl font-bold mb-4">Student Information</h1>
      <div v-if="student">
        <h2 class="text-xl font-semibold mb-2">Student Profile</h2>
        <img
          v-for="image in student?.image"
          :key="image"
          :src="image"
          alt="Student image"
          class="border-2 border-black h-48 w-42 object-cover mb-4 mx-auto"
        />
        <p class="text-lg font-semibold">Name: {{ student.name }}</p>
        <p class="text-lg font-semibold">Surname: {{ student.surname }}</p>
        <p class="text-lg font-semibold">
          Course: {{ student.department }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { type StudentItem } from "@/type";
import StudentService from "@/services/StudentService";
import { type AxiosResponse } from "axios";
import { useRoute } from "vue-router";
const route = useRoute();
const studentId = parseInt(String(route.params.id)) || 0;
const student = ref<StudentItem | null>(null);

onMounted(async () => {
  try {
    const response: AxiosResponse<StudentItem> =
      await StudentService.getStudentById(studentId);
    student.value = response.data;
  } catch (error) {
    console.error("Error fetching student data:", error);
  }
});
</script>
