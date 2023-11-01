<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue';
import type { StudentItem } from '@/type';
import { computed, ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import axios, { type AxiosResponse } from 'axios'
import StudentService from '@/services/StudentService'

const students: Ref<StudentItem[]> = ref([])

const totalStudent = ref<number>(0)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

watchEffect(() => {
  StudentService.getStudent(5, props.page).then((response: AxiosResponse<StudentItem[]>) => {
    students.value = response.data
    totalStudent.value = response.headers['x-total-count']
  })
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalStudent.value / 5)
  return props.page.valueOf() < totalPages
})
</script>

<template>
  <main class="font-mono flex justify-center pt-10">
      <div>
        <div class="grid gap-20 grid-cols-3 mx-auto">
        <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
      </div>
      <div class="text-center my-10 space-x-10">
        <RouterLink class="hover:font-bold" :to="{ name: 'student', query: { page: page - 1 } }" rel="prev" v-if="page != 1">
          Prev Page
        </RouterLink>

        <RouterLink class="hover:font-bold" :to="{ name: 'student', query: { page: page + 1 } }" rel="next" v-if="hasNextPage">
          Next Page
        </RouterLink>
      </div>
      </div>
  </main>
</template>
