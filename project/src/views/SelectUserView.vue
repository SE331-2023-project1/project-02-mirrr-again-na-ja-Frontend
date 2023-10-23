<script setup lang="ts">

</script>

<template>
  <RouterLink class="" :to="{name: 'login'}">
    <div class="mx-auto border-2 border-indigo-600 h-50 w-52 flex flex-col items-center hover:shadow-lg hover:scale-110">
      <h4>Student</h4>
    </div>
  </RouterLink>
  <RouterLink class="" :to="{name: 'login-AJ'}">
    <div class="mx-auto border-2 border-indigo-600 h-50 w-52 flex flex-col items-center hover:shadow-lg hover:scale-110">
      <h4>Teacher</h4>
    </div>
  </RouterLink>
  <RouterLink class="" :to="{name: 'login-AD'}">
    <div class="mx-auto border-2 border-indigo-600 h-50 w-52 flex flex-col items-center hover:shadow-lg hover:scale-110">
      <h4>Admin</h4>
    </div>
  </RouterLink>
</template>

<style scoped>

</style>