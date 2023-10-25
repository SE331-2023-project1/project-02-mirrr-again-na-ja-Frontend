<script setup lang="ts">
import AdvisorCard from '@/components/AdvisorCard.vue';
import type { AdvisorItem } from '@/type';
import { computed, ref, watchEffect } from 'vue'
import type { Ref } from 'vue'
import axios, { type AxiosResponse } from 'axios'
import AdvisorService from '@/services/AdvisorService'

const advisors: Ref<AdvisorItem[]> = ref([])

const totalAdvisor = ref<number>(0)
const props = defineProps({
  page: {
    type: Number,
    required: true
  }
})

watchEffect(() => {
  AdvisorService.getAdvisor(5, props.page).then((response: AxiosResponse<AdvisorItem[]>) => {
    advisors.value = response.data
    totalAdvisor.value = response.headers['x-total-count']
  })
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalAdvisor.value / 5)
  return props.page.valueOf() < totalPages
})
</script>

<template>
  <main class="font-mono flex justify-center">
      <div>
        <div class="grid gap-20 grid-cols-3 mx-auto">
        <AdvisorCard v-for="advisor in advisors" :key="advisor.id" :advisor="advisor"></AdvisorCard>
      </div>
      <div class="text-center my-10 space-x-10">
        <RouterLink class="hover:font-bold" :to="{ name: 'advisor', query: { page: page - 1 } }" rel="prev" v-if="page != 1">
          Prev Page
        </RouterLink>

        <RouterLink class="hover:font-bold" :to="{ name: 'advisor', query: { page: page + 1 } }" rel="next" v-if="hasNextPage">
          Next Page
        </RouterLink>
      </div>
      </div>
  </main>
</template>
