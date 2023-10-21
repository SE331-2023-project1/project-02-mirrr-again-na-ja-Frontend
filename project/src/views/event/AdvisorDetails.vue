<!--
<script setup lang="ts">
import { type AdvisorItem } from '@/type';
import type { PropType } from 'vue';
defineProps({
    advisor: {
        type: Object as PropType<AdvisorItem>,
            require: true
    }
})
</script>

<template>
    <div v-if="advisor">
        <img :src="advisor.image">        
        <p>ID: {{ advisor.id }}</p>
        <p>Name-Surname: {{ advisor.name }} {{ advisor.surname }}</p>
    </div>
</template>
--> 

<!--Script-->
<script setup lang ="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { AdvisorItem } from '@/type';
import AdvisorService from '@/services/AdvisorService';
const advisor = ref<AdvisorItem | null> (null)
const props = defineProps({
    id: String
})

AdvisorService.getAdvisorById(Number(props.id))
.then((response) => {
    advisor.value = response.data
}).catch(error => {
    console.log(error)
})
</script>

<!--Template-->
<template>
    <div v-if="advisor">
        <div class="m-5">
            <div class="font-mono text-3xl mx-auto border-2 bg-gradient-to-r bg-green-700 h-50 w-1/2 flex md:flex-row gap-2 flex-col p-3 rounded-md">
                <div class="border-green-700 border-2 h-55 w-80 flex flex-col items-center rounded-md">
                    <img :src="advisor.image" class="object-scale-down rounded-md">
                </div>
                <div class="pl-2 border-2 bg-white h-50 w-full flex flex-col items-left rounded-md">        
                    <p>ID: {{ advisor.id }}</p>
                    <p>Name-Surname: {{ advisor.name }} {{ advisor.surname }}</p>
                    <p></p>
                </div>
            </div>

        </div>
    </div>
</template>