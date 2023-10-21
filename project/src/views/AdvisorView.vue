<script setup lang="ts">
import type { AdvisorItem } from '@/type';
import { ref } from 'vue'
import type { Ref } from 'vue'
import axios from 'axios'
import AdvisorService from '@/services/AdvisorService'
import AdvisorCard from '@/components/AdvisorCard.vue';

const advisors: Ref<AdvisorItem[]> = ref([])
  AdvisorService.getAdvisor().then((response) => {
    advisors.value = response.data
  })
</script>

<template>
  <main class="font-mono text-center">
    <div class="grid gap-20 grid-cols-3 grid-rows-3">
    <AdvisorCard v-for="advisor in advisors" :key="advisor.id" :advisor="advisor"></AdvisorCard>
    </div>
  </main>
</template>

