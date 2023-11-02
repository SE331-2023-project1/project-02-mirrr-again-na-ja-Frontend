<script setup lang="ts">
import type { AdviserItem } from "@/type";
import { type PropType } from "vue";
defineProps({
  professer: {
    type: Object as PropType<AdviserItem>,
    require: true,
  },
});
</script>

<template>
  <RouterLink
    :to="{ name: 'professer-profile', params: { id: professer?.id } }"
  >
    <div class="flex justify-center items-center mb-2">
      <div
        v-if="professer"
        class="border-2 w-3/4 h-38 p-2 bg-white text-black rounded-lg border-black hover:shadow-grey-300 hover:shadow-lg hover:scale-110"
      >
        <div class="flex row-auto">
          <div class="mr-2">
            <img
              v-for="image in professer?.image"
              :key="image"
              :src="image"
              alt=" professer image"
              class="border-2 border-black h-36 w-32 object-cover"
            />
          </div>
          <div class="ml-2 text-left">
            <p class="text-lg font-mono font-bold">
              ProfesserID: {{ professer?.advisorID }}
            </p>
            <p class="text-lg font-mono font-bold">
              Name: {{ professer.name }} {{ professer.surname }}
            </p>
            <p class="text-lg font-mono font-bold">
              Amount of Advisee: {{ professer.studentList.length }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
