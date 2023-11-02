<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-20 border-2">
    <h2 class="text-2xl font-bold mb-4">Upload Announcement File</h2>
    <UploadFile v-model="currentAdviser.announcements" />
    <div class="flex justify-center">
      <button
      type="submit"
      class="mt-4 bg-white border-2 border-black hover:bg-black hover:text-white text-black font-bold py-2 px-4 rounded-full"
      @click.prevent="updateAdvisor"
    >
      Update
    </button>
    </div>
  </div>
  <h1
    v-if="message"
    class="text-center text-red-800 max-w-md mx-auto p-6 bg-red-300 rounded-lg mt-10"
  >
    {{ message }}
  </h1>
</template>

<script setup lang="ts">
import UploadFile from "@/components/UploadImage.vue";
</script>

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
      console.log("updateAdvisor method called");

      let data = {
        id: this.currentAdviser.id,
        name: this.currentAdviser.name,
        surname: this.currentAdviser.surname,
        image: this.currentAdviser.image,
        department: this.currentAdviser.department,
        position: this.currentAdviser.position,
        announcements: this.currentAdviser.announcements,
      };
      AdviserService.updateAdvisorById(this.currentAdviser.id, data)

        .then((response: ResponseData) => {
          console.log("Update successful:", response.data);
          this.message = "The Adviser Information was updated successfully!";
          setTimeout(() => {
            console.log("Timeout executed");
            this.message = "";
          }, 3000);
        })
        .catch((e: Error) => {
          console.log("Update failed:", e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getStudet(this.$route.params.id);
  },
});
</script>
