<script setup lang="ts">
import type { StudentItem } from '@/type'
import type { PropType } from 'vue'
const props = defineProps({
    student: {
        type: Object as PropType<StudentItem>,
            required: true
    }
})
</script>


<template>
    <RouterLink class="student-link" :to="{name: 'student-detail', params:{id: student.id}}">
        <div class="mx-auto border-2 border-indigo-600 h-50 w-52 flex flex-col items-center hover:shadow-lg hover:scale-110">
            <img :src="student.image" alt="image" >
            <h4>{{ student.name}} {{ student.surname }}</h4>
        </div>
    </RouterLink>
</template> 

<style>
.student-link {
    color: #2c3e50;
    text-decoration: none;
}
</style>
