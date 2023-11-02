<template>
  <div class="flex justify-center">
    <div
      v-if="currentAdviser.id"
      class="flex flex-col items-center mt-6 border-4 border-black w-1/2 p-10 rounded-md"
    >
      <p class="text-2xl font-mono font-bold text-center">
        Update Adviser Details
      </p>
      <form>
        <div class="mb-4">
          <label for="Name" class="block text-gray-700 font-bold mb-2"
            >Name</label
          >
          <input
            type="text"
            v-model="currentAdviser.name"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div class="mb-4">
          <label for="Surname" class="block text-gray-700 font-bold mb-2"
            >Surname</label
          >
          <input
            id="description"
            v-model="currentAdviser.surname"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div class="mb-4">
          <label for="Department" class="block text-gray-700 font-bold mb-2"
            >Department</label
          >
          <input
            type="text"
            v-model="currentAdviser.department"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div class="mb-4">
          <label for="Position" class="block text-gray-700 font-bold mb-2"
            >Position</label
          >
          <input
            type="text"
            v-model="currentAdviser.position"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <UploadImage v-model="currentAdviser.image" />
      </form>
      <div class="mb-5" v-if="message">
        <p class="text-red-600 p-3 border border-red-600 rounded">
          {{ message }}
        </p>
      </div>
      <div>
        <button
          type="submit"
          class="mt-3 bg-red-800 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
          @click="updateAdvisor"
        >
          Update
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { type AdviserItem } from "@/type";
import { type ResponseData } from "@/ResponseData";
import AdviserService from "@/services/AdviserService";

export default defineComponent({
  name: "student",
  data() {
    return {
      currentAdviser: {} as AdviserItem,
      message: "",
    };
  },
  methods: {
    getStudet(id: any) {
      AdviserService.getAdviserById(id)
        .then((response: ResponseData) => {
          this.currentAdviser = response.data;
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    },
    updateAdvisor() {
      let data = {
        id: this.currentAdviser.id,
        name: this.currentAdviser.name,
        surname: this.currentAdviser.surname,
        image: this.currentAdviser.image,
        department: this.currentAdviser.department,
        position: this.currentAdviser.position,
      };
      AdviserService.updateAdvisorById(this.currentAdviser.id, data)
        .then((response: ResponseData) => {
          console.log(response.data);
          this.message = "The Adviser Information was updated successfully!";
          setTimeout(() => {
            this.message = ""; // Clear the message
          }, 3000);
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
