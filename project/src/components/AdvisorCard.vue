<!--Script-->
<script setup lang="ts">
import type { AdvisorItem } from '@/type'
import type { PropType } from 'vue'
const props = defineProps({
    advisor: {
        type: Object as PropType<AdvisorItem>,
            required: true
    }
})
</script>

<!--Template-->
<template>
    <RouterLink class="advisor-link" :to="{name: 'advisor-detail', params:{id: advisor.id}}">
        <div class="mx-auto border-2 border-indigo-600 h-50 w-52 flex flex-col items-center hover:shadow-lg hover:scale-110">
            <img :src="advisor.image" alt="image">
            <h4>{{ advisor.name }} {{ advisor.surname }}</h4>
        </div>
    </RouterLink>
</template>

<style>
.advisor-link {
    color: #2c3e50;
    text-decoration: none;
}
</style>