<template>
  <div class="mx-auto text-center">
    <div v-if="advisorProfile">
      <h2 class="text-2xl font-bold mb-10">
        Advisor ID: {{ advisorProfile.advisorID }}
      </h2>
      <img
        v-for="image in advisorProfile?.image"
        :key="image"
        :src="image"
        alt="Advisor image"
        class="border-2 border-black h-48 w-42 object-cover mb-4 mx-auto"
      />
      <div class="justify-center text-center">
        <p class="text-lg font-semibold">
          Name: {{ advisorProfile?.name }} {{ advisorProfile?.surname }}
        </p>
        <p class="text-lg font-semibold">
          Course: {{ advisorProfile?.department }}
        </p>
        <p class="text-lg font-semibold">
          Position: {{ advisorProfile.position }}
        </p>
      </div>
    </div>
  </div>
  <div class="text-center">
    <h3 class="text-xl font-semibold mt-6 mb-5">Students:</h3>
    <div class="flex justify-center mx-10">
      <div
        class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mx-20 w-1/2"
      >
        <router-link
          v-for="student in advisorProfile?.studentList"
          :key="student.id"
          :to="{ name: 'studentOwn', params: { id: student.id } }"
          class="text-center cursor-pointer"
        >
          <div class="p-4 border border-gray-200 rounded shadow-md">
            <p class="text-lg font-semibold">
              {{ student.name }} {{ student.surname }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  
  <div class="flex justify-center text-center my-5">
    <RouterLink
    :to="{ name: 'post-announce', params: { id: advisorProfile?.id } }"
    class="font-mono font-bold text-xl underline"
  >
    post announce</RouterLink
  >
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const currentUser = authStore.currentUserNameAdvisor;
const advisorProfile = authStore.advisor;
console.log("data" + advisorProfile?.id);
</script>
