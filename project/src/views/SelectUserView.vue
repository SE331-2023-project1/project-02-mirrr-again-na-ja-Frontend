<script setup lang="ts">

</script>

<template>
  <div class="text-3xl font-mono">

    <!-- Student -->
    <div class="pt-10">
  <RouterLink class="" :to="{name: 'login'}">
    <div class="mx-auto border-2 border-indigo-600 h-50 w-64 flex flex-col items-center hover:shadow-lg hover:scale-110">
      <h4>Student</h4>
    </div>
  </RouterLink>  
</div>

    <!-- Advisor -->
  <div class="pt-5">
    <RouterLink class="" :to="{name: 'login-AJ'}">
    <div class="mx-auto border-2 border-indigo-600 h-50 w-64 flex flex-col items-center hover:shadow-lg hover:scale-110">
      <h4>Advisor</h4>
    </div>
  </RouterLink>
  </div>

      <!-- Admin -->
  <div class="pt-5">
    <RouterLink class="" :to="{name: 'login-AD'}">
    <div class="mx-auto border-2 border-indigo-600 h-50 w-64 flex flex-col items-center hover:shadow-lg hover:scale-110">
      <h4>Admin</h4>
    </div>
  </RouterLink>
  </div>
  </div>
  
</template>

<style scoped>

</style>