<script setup lang="ts">

</script>

<template>
  <nav class="text-center text-3xl space-x-6 py-4 uppercase font-mono">
    <RouterLink class="hover:shadow-lg hover:font-bold" :to="{name: 'student' }">Student</RouterLink>
    <RouterLink class="hover:shadow-lg hover:font-bold" :to="{name: 'advisor' }">Advisor</RouterLink>
    <RouterLink class="hover:shadow-lg hover:font-bold" :to="{name: 'add-student' }">Add New Student</RouterLink>
    <RouterLink class="hover:shadow-lg hover:font-bold" :to="{name: 'add-advisor' }">Add New Advisor</RouterLink>
  </nav>
  
</template>

<style scoped>

</style>