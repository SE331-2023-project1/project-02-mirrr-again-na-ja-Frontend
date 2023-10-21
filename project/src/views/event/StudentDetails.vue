<!--<script setup lang="ts">
import { type StudentItem } from '@/type';
import type { PropType } from 'vue';
defineProps({
    student: {
        type: Object as PropType<StudentItem>,
            require: true
    }
})
</script>

<template>
    <div v-if="student">
        <img :src="student.image">        
        <p>ID: {{ student.id }}</p>
        <p>Name-Surname: {{ student.name }} {{ student.surname }}</p>
        <p>Course: {{ student.course }}</p>
    </div>
</template>
-->

<!--Script-->
<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { StudentItem, AdvisorItem } from '@/type'
import {useMessageStore} from "@/stores/message";
import StudentService from '@/services/StudentService'
const student = ref<StudentItem | null>(null)
const props = defineProps({
  id: String
})

StudentService.getStudentById(Number(props.id))
  .then((response) => {
    student.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })

import AdvisorService from '@/services/AdvisorService'
const store = useMessageStore()
const advisor = ref<AdvisorItem | null>(null)

AdvisorService.getAdvisorById(Number(props.id))
  .then((response) => {
    advisor.value = response.data
  })
  .catch((error) => {
    console.log(error)
  })

  const comments = ref<string[]>([])
  const comment = ref<string>('')
  const submit = () => {    
    if(comment.value === '') return
    store.updateMessage('You are successfully added comment ')
  setTimeout( () => {
    store.resetMessage()
  }, 3000)
    comments.value.push(comment.value)
    comment.value = ""
  }

</script>

<!--Template-->
<template>
  <div v-if="student">
    <div
      class="font-mono text-3xl mx-auto border-2 bg-gradient-to-r bg-green-700 h-50 w-1/2 flex md:flex-row gap-2 flex-col p-3 rounded-md">
      <div class=" border-green-700 border-2 h-55 w-80 flex flex-col items-center rounded-md">
        <img :src="student.image" class="object-scale-down rounded-md" />
      </div>
      <div
        class="pl-2 border-2 bg-white h-50 w-full flex flex-col items-left rounded-md"
      >
        <p>ID: {{ student.id }}</p>
        <p>Name-Surname: {{ student.name }} {{ student.surname }}</p>
        <p>Course: {{ student.course }}</p>
        <br>


        <!-- <RouterLink class="mx-auto" to="/comment">
          <button class="mt-4 px-4 py-2 bg-white text-black hover:font-bold rounded">Comment</button>
        </RouterLink> -->
      </div>
    </div>
    <br>
    <div class="text-center text-3xl">
        <p class="pb-5">Comment:</p>
        <textarea class="w-80 bg-white border-black border-2 h-10" v-model="comment"></textarea>
        <br>
        <button class="border px-3 bg-red-600 text-white text-2xl" @click="submit" >Submit</button>
    </div>
    <br>
    <div class="text-3xl text-center">
        <li v-for="commentItem in comments" v-bind:key="commentItem"> {{ commentItem }}</li>
    </div>
  </div>
</template>
