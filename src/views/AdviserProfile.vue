<script setup lang="ts">
import { computed, ref, type PropType } from "vue";
import type { AdviserItem } from "@/type";
import { useMessageStore } from "@/stores/message";
import { storeToRefs } from "pinia";
import AdviserService from "@/services/AdviserService";
import { useAuthStore } from "@/stores/auth";
const professer = ref<AdviserItem | null>(null);
const authStore = useAuthStore();
const props = defineProps({
  id: String,
  professer: {
    type: Object as PropType<AdviserItem>,
    require: true,
  },
});

AdviserService.getAdviserById(Number(props.id))
  .then((response) => {
    professer.value = response.data;
  })
  .catch((error) => {
    console.log(error);
  });

const store = useMessageStore();
const detail = computed(() => store.getDetail(String(props.professer?.id)));
const newDetail = ref("");
function addDetail() {
  store.addDetail(String(props.professer?.id), newDetail.value);
  newDetail.value = "";
}
const { flashMessage } = storeToRefs(store);
</script>

<template>
  <div class="flex justify-center">
    <div class="my-10 border-4 border-black w-1/2 p-10 rounded-md">
    <div class="bg-red-700 transition duration-3000 my-2">
      <h4 class="text-center font-mono text-white">{{ flashMessage }}</h4>
    </div>
    <h1 class="text-center text-3xl font-mono">
      Professer ID: {{ professer?.advisorID }}
    </h1>
    <div class="mt-5">
      <div class="justify-center my-auto grid gap-3">
        <div class="mx-auto">
          <img
          v-for="image in professer?.image"
          :key="image"
          :src="image"
          alt=" professer image"
          class="border-2 border-black h-48 w-42 object-cover"
        />
        </div>
        <div class="font-mono grid grid-cols-2 gap-2">
          <p class="font-semibold">Name-SurName:</p>
          <p class="text-center">{{ professer?.name }} {{ professer?.surname }}</p>
          <p class="font-semibold">Department:</p>
          <p class="text-center">{{ professer?.department }}</p>
          <p class="font-semibold">Position:</p>
          <p class="text-center">{{ professer?.position }}</p>
        </div>
        <ul v-if="authStore.isAdmin">
          <div class="flex justify-center mt-5">
            <RouterLink
              :to="{ name: 'update-advisor', params: { id: professer?.id } }"
              class="mr-0  text-black font-bold py-2 px-4 rounded underline" 
            >
              Edit information
            </RouterLink>
          </div>
        </ul>
        <!-- <div v-if="detail && detail.length">
          <h1 class="text-center font-mono font-extrabold">professer Detail</h1>
          <p
            v-for="(details, index) in detail"
            :key="index"
            class="font-mono text-center"
          >
            " {{ details }} "
          </p>
        </div>
        <div class="text-center font-mono border-t-2 border-black">
          <input
            type="text"
            v-model="newDetail"
            placeholder="Add Professer Detail.."
            class="border-2 border-black h-16 w-80 p-2 break-words mt-4 text-center"
          />
          <div>
            <button
              @click="addDetail"
              class="my-2 hover:text-red-800 font-extrabold underline"
            >
              Add Detail
            </button>
          </div>
        </div> -->
      </div>
    </div>
  </div>
  </div>
</template>
