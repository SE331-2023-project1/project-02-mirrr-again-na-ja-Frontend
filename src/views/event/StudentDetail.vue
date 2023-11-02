<script setup lang="ts">
import { type StudentItem } from "@/type";
import { computed, ref, type PropType } from "vue";
import { useMessageStore } from "@/stores/message";

const props = defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true,
  },
});
const store = useMessageStore();
const message = computed(() => store.getMessage(String(props.student?.id)));
const detail = computed(() => store.getDetail(String(props.student?.id)));
const newDetail = ref("");
function addDetail() {
  store.addDetail(String(props.student?.id), newDetail.value);
  //clear input box
  newDetail.value = "";
}
</script>

<template>
  <div v-if="student" class="font-mono grid grid-cols-2">
    <p class="font-semibold text-left">Name-SurName:</p>
    <p class="text-center">{{ student.name }} {{ student.surname }}</p>
    <p class="font-semibold text-left">Course:</p>
    <p class="text-center">{{ student.department }}</p>

  </div>
  <div v-if="message" class="font-mono">
    <h1 class="font-semibold text-left">Comment from Advisor: </h1>
    <p class="text-center">" {{ message }} "</p>
  </div>
  <div v-if="detail && detail.length">
    <h1 class=" text-center font-mono font-semibold">Student Detail</h1>
    <p v-for="(details, index) in detail" :key="index" class="text-center">" {{ details }} "</p>
  </div>
  <!-- <div class="text-center font-mono ">
    <input type="text" v-model="newDetail" placeholder="Add Student Detail.." class="border-2 border-black h-16 w-80 p-2 break-words mt-4 text-center"/>
    <div >
      <button @click="addDetail" class="my-2 hover:text-red-800 font-extrabold underline">Add Detail</button>
    </div>
  </div> -->
</template>
