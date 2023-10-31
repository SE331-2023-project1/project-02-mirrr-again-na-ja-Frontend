<script setup lang="ts">
import type { AdvisorItem } from '@/type'
import { ref } from 'vue'
const advisor = ref<AdvisorItem>({
    id: 0,
    name: '',
    surname: '',
    image: '',
})
</script>
<template>
    <div class="font-mono py-4">
        <div class="text-center text-4xl font-bold">Add New Advisor</div>
        <form class="py-6 px-96 text-3xl">
            <div class="pt-4 mb-4">
                <label class="block text-zinc-700 font-bold mb-2">Name:</label>
                <input v-model="advisor.name" type="text" placeholder="Name" class="w-6/12 border-gray-600 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
            </div>
            <div class="mb-4">
                <label class="block text-zinc-700 font-bold mb-2">Surname:</label>
                <input v-model="advisor.surname" type="text" placeholder="Surname" class="w-6/12 border-gray-600 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
            </div>
            <div class="mb-4">
                <label class="block text-zinc-700 font-bold mb-2">Advisor ID:</label>
                <input v-model="advisor.id" type="text" placeholder="Advisor ID" class="w-6/12 border-gray-600 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"/>
            </div>
            <button class="mb-4 bg-red-600 hover:shadow-grey-300 hover:shadow-lg hover:font-bold text-white py-2 px-4 rounded-3xl" type="submit">Add</button>
        </form>

    </div>
</template>