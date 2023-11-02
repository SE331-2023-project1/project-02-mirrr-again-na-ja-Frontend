<script lang="ts">
import { defineComponent } from "vue";
import { type StudentData } from "@/type";
import { type ResponseData } from "@/ResponseData";
import StudentService from "@/services/StudentService";
import router from "@/router";
export default defineComponent({
  name: "student",
  data() {
    return {
      currentStudent: {} as StudentData,
      message: "",
    };
  },
  methods: {
    getStudet(id: any) {
      StudentService.getStudentById(id)
        .then((response: ResponseData) => {
          this.currentStudent = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    updateStudent() {
      let data = {
        id: this.currentStudent.id,
        name: this.currentStudent.name,
        surname: this.currentStudent.surname,
        image: this.currentStudent.image,
      };
      StudentService.updateStudentById(this.currentStudent.id, data)
        .then((response: ResponseData) => {
          console.log(response.data);
          this.message = "The student information was updated successfully!";
          setTimeout(() => {
            this.message = ""; // Clear the message
            router.push({ name: "students" });
          }, 1000);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getStudet(this.$route.params.id);
  },
});
</script>
<script setup lang="ts">
import UploadImage from "@/components/UploadImage.vue";
</script>

<template>
  <div v-if="currentStudent.id">
    <form class="font-mono mt-5">
      <div class="mb-4">
        <label for="Name" class="block text-gray-700 font-bold mb-2"
          >Name:</label
        >
        <input
          type="text"
          v-model="currentStudent.name"
          class="w-3/6 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <div class="mb-4">
        <label for="Surname" class="block text-gray-700 font-bold mb-2"
          >Surname:</label
        >
        <input
          id="description"
          v-model="currentStudent.surname"
          class="w-3/6 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
    </form>
    <div class="mb-5" v-if="message">
      <p class="text-red-600 p-3 border border-red-600 rounded">
        {{ message }}
      </p>
    </div>
    <UploadImage v-model="currentStudent.image" />
    <div class="flex justify-center">
      <button
        type="submit"
        class="mt-3 bg-red-800 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
        @click="updateStudent"
      >
        Update
      </button>
    </div>
  </div>
</template>
