<script setup lang="ts">
import AdviserList from "@/components/AdviserList.vue";
import { computed, ref, watchEffect } from "vue";
import type { Ref } from "vue";
import type { AdviserItem } from "@/type";
import type { AxiosResponse } from "axios";
import { useAdviserStore } from "@/stores/newAdviser";
import AdviserService from "@/services/AdviserService";
import BaseInput from "@/components/BaseInput.vue";
import router from "@/router";
import {RouterLink} from "vue-router";
const adviserStore = useAdviserStore();
const professer: Ref<Array<AdviserItem>> = ref([]);
const totalEvent = ref<number>(0);
const eventsPerPage = ref(4);
const props = defineProps({
  page: {
    type: Number,
    required: true,
    keyword: null
  },
});
watchEffect(() => {
  AdviserService.getAdvisers(eventsPerPage.value, props.page).then(
    (response: AxiosResponse<AdviserItem[]>) => {
      professer.value = response.data;
      professer.value = [
        ...adviserStore.getTemporaryAdviser(),
        ...professer.value,
      ];
      totalEvent.value = response.headers["x-total-count"];
    }
  );
});

const hasNextPages = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / eventsPerPage.value);
  return props.page.valueOf() < totalPages;
});

const keyword = ref('')
function updateKeyword (value: string) {
  let queryFunction;
  if (keyword.value === ''){
    queryFunction = AdviserService.getAdvisers(6, 1)
  }else {
    queryFunction = AdviserService.getAdvisorByKeyword(keyword.value, 6, 1)
  }
  queryFunction.then((response: AxiosResponse<AdviserItem[]>) => {
    professer.value = response.data
    console.log('students',professer.value)
    totalEvent.value = response.headers['x-total-count']
    console.log('totalAdvisor',totalEvent.value)
  }).catch(() => {
    router.push({ name: 'network-errorr' })
  })
}
</script>

<template>
  <div>
    <div class="pt-3 px-2 mb-2">
      <span class="Left">
        <BaseInput
            v-model="keyword"
            placeholder="Search..."
            @input="updateKeyword"
            class=" p-2 pl-5 border rounded-full"
        />
      </span>
      <span class="ml-3">
        <RouterLink
            to="/registerAdvisor"
            class="text-black font-semibold hover:shadow-grey-300 hover:shadow-lg hover:font-bold border-2 rounded-lg p-1 px-2"
            active-class="active-link"
            exact-active-class="active-link"
        >Add</RouterLink
          >
      </span>
      <span class="Right">
        <RouterLink
            to="/students"
            class="text-black hover:shadow-grey-300 hover:shadow-lg hover:font-semibold rounded-lg text-xl p-1"
            active-class="active-link"
            exact-active-class="active-link"
        >Student</RouterLink
        >
        <span class="text-xl"> | </span>
        <RouterLink
            to="/advisors"
            class="text-black hover:shadow-grey-300 hover:shadow-lg hover:font-semibold rounded-lg text-xl p-1"
            active-class="active-link"
            exact-active-class="active-link"
        >Advisor</RouterLink
        >
      </span>
    </div>
    <div class="grid grid-cols-2 gap-2 mb-4 mt-5">
      <AdviserList
        v-for="professers in professer"
        :key="professers.id"
        :professer="professers"
      >
      </AdviserList>
    </div>
    <div class="flex justify-around space-x-28">
      <RouterLink
        :to="{ name: 'professer', query: { page: page - 1 } }"
        rel="prev"
        v-if="page != 1"
        id="page-prev"
        class="font-bold hover:text-red-800"
      >
        Prev page
      </RouterLink>
      <RouterLink
        :to="{ name: 'professer', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPages"
        id="page-next"
        class="font-bold hover:text-green-600"
      >
        Next page
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.Right{
  float: right;
  margin-right: 10px;
  margin-top: 5px;
}

.Left{
  margin-left: 10px;
  margin-top: 20px;
  width: 64px;
}
</style>