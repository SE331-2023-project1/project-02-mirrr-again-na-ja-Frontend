<script setup lang="ts">
import { type AdviserItem, type StudentItem } from "@/type";
import { ref, type PropType } from "vue";
import { useMessageStore } from "@/stores/message";
import router from "@/router";
import AdviserService from "@/services/AdviserService";
const props = defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true,
  },
});


const professor = ref<AdviserItem>()
AdviserService.getAdviserById(props.student?.advisor.id as number)
.then(res => {
  professor.value = res.data as AdviserItem
})

function flashMessagge() {
  //   store.updateflashcard("Welcome to Adviser Profile");
  //   setTimeout(() => {
  //     store.resetflashcard();
  //   }, 3000);
  router.push({
    name: "professer-profile",
    params: {
      id: professor.value?.id,
    },
  });
}
</script>

<template>
        <div v-if="professor">
    <div
      class="mt-5 font-mono text-3xl h-50 w-1/2 flex md:flex-row rounded-md">
      <div>
        <img v-for="image in professor?.image"
          :key="image"
          :src="image"
          alt="Professor Image" class="object-scale-down rounded-md" />
      </div>
      <div
        class=" h-50 flex flex-col items-left rounded-md">
        <p class="mt-2 ml-2">ID: {{ professor.advisorID }}</p>
        <p class="mt-2 ml-2">Name-Surname: {{ professor.name }} {{ professor.surname }}</p>
        <p class="mt-2 ml-2">Course: {{ professor.department }}</p>
        </div>
    </div>
  
  </div>

  
    <!-- <div class="text-center font-mono">
      <input
        type="text"
        placeholder="Enter comment .."
        v-model="comment"
        class="border-2 border-black h-16 w-80 p-2 break-words mt-2 text-center"
      />
      <div>
        <button
          @click="onSubmit"
          class="my-2 hover:text-red-800 font-extrabold underline"
        >
          Submit
        </button>
      </div>
    </div> -->

</template>

<style scoped>
.active-link {
  color: red;
}
</style>
