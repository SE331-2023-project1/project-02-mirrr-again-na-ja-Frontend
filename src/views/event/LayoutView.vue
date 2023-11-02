<script setup lang="ts">
import { useAuthStore } from "@/stores/auth";
import { useStudentStore } from "@/stores/student";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const store = useStudentStore();
const { student, professer } = storeToRefs(store);
const id = ref(student?.value?.id);

const authStore = useAuthStore();
</script>

<template>
      <div v-if="student">
    <div
      class="mt-5 font-mono text-3xl mx-auto border-2 bg-gradient-to-r bg-green-700 h-50 w-1/2 flex md:flex-row gap-2 flex-col p-3 rounded-md">
      <div class=" border-green-700 border-2 h-55 w-80 flex flex-col items-center rounded-md">
        <img v-for="image in student?.image"
          :key="image"
          :src="image"
          alt="Student Image" class="object-scale-down rounded-md" />
      </div>
      <div
        class="pl-2 border-2 bg-white h-50 w-full flex flex-col items-left rounded-md">
        <p class="mt-2">ID: {{ student.studentID }}</p>
        <p class="mt-2">Name-Surname: {{ student.name }} {{ student.surname }}</p>
        <p class="mt-2">Course: {{ student.department }}</p>
        </div>
        </div>
        </div>

    <div class="mt-5 font-mono text-2xl mx-auto border-2 bg-gradient-to-r h-50 w-1/2 flex md:flex-row gap-2 flex-col p-3 rounded-md">
      <div>
        <RouterLink
          :to="{ name: 'adviser-detail', params: { id } }"
          class="font-mono hover:font-bold hover:shadow-md hover:shadow-zinc-300"
          active-class="active-link"
          exact-active-class="active-link"
        >  Advisor Details  </RouterLink>

        <RouterLink
          v-if="authStore.isStudent"
          :to="{ name: 'update-student', params: { id } }"
          class="font-mono hover:font-bold hover:shadow-md hover:shadow-zinc-300"
          active-class="active-link"
          exact-active-class="active-link"
        >  Edit Student Details  </RouterLink>
        <RouterLink
          v-if="authStore.isStudent"
          :to="{ name: 'announcementView', params: { id } }"
          class="font-mono hover:font-bold hover:shadow-md hover:shadow-zinc-300"
          active-class="active-link"
          exact-active-class="active-link"
        >  Announcement  </RouterLink>
        <RouterView :student="student" :professer="professer"></RouterView>
      </div>
    </div>
</template>

<style scoped>
.containerd {
  display: flex;
}
.profile-section {
  width: 40%;
  padding: 20px;
}
.function-section {
  width: 35%;
  padding: 20px;
}
.active-link {
  font-weight: bold;
  color: rgb(254 240 138);
  background-color: black;
}
</style>
