<script setup lang="ts">
import StudentCard from '@/components/StudentCard.vue';
import type { StudentItem } from '@/type';
import { computed, ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import StudentService from '@/services/StudentService'
import {RouterLink} from "vue-router";

const students: Ref<StudentItem[]> = ref([])

const totalStudent = ref<number>(0)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

watchEffect(() => {
  StudentService.getStudent(4, props.page).then((response: AxiosResponse<StudentItem[]>) => {
    students.value = response.data
    totalStudent.value = response.headers['x-total-count']
  })
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalStudent.value / 4)
  return props.page.valueOf() < totalPages
})
</script>

<template>
  <main class="font-mono flex justify-center">
    <div>
      <div class="absolute left-5 mt-5 mr-3 text-lg">
        <img
            class="h-20 w-20 rounded-md"
            src="https://i.pinimg.com/564x/8e/77/56/8e7756e78dca420e5bff8d0ea34ed645.jpg"
            alt="Logo"
        />
      </div>
      <div class="absolute right-10 mt-2 mr-3 text-lg rounded-md bg-white px-3">
        <RouterLink class="text-black hover:shadow-grey-300 hover:shadow-lg hover:font-bold font-mono text-2xl" :to="{name:'announcement'}">Post</RouterLink>
      </div>
    </div>

    <br>
    <div class="mt-40">
      <div class="grid gap-20 grid-cols-4 mx-auto">
        <StudentCard v-for="student in students" :key="student.id" :student="student"></StudentCard>
      </div>
      <div class="text-center my-10 space-x-10">
        <RouterLink class="hover:font-bold" :to="{ name: 'main-AJ', query: { page: page - 1 } }" rel="prev" v-if="page != 1">
          Prev Page
        </RouterLink>

        <RouterLink class="hover:font-bold" :to="{ name: 'main-AJ', query: { page: page + 1 } }" rel="next" v-if="hasNextPage">
          Next Page
        </RouterLink>
      </div>
    </div>
  </main>
</template>
