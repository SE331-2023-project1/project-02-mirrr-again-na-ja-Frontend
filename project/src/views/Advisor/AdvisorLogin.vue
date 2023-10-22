<script setup lang="ts">
</script>

<template>
  <div class="flex justify-center">
    <img
        class="w-96 h-52"
        src="https://1000logos.net/wp-content/uploads/2021/11/My-Hero-Academia-Logo.png"
        alt="Logo"
    />
  </div>
  <div class="text-5xl text-center font-mono">Login</div>
  <div class="text-center mt-4 font-mono">
    <form @submit.prevent="login">
      <p>
        <text class="text-2xl">Email: </text>
        <input
            class="border-black border-2 w-72 h-10 text-xl"
            v-model="username"
            type="text"
            placeholder=" Email "
        />
      </p>
      <p>
        <text class="text-2xl">Password: </text>
        <input
            class="border-black border-2 mt-4 w-72 h-10 text-xl"
            v-model="password"
            type="password"
            placeholder=" Password "
        />
      </p>
      <button class="bg-red-600 text-white rounded-xl h-11 w-28 mt-4 text-2xl" type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Add your login logic here, e.g., send a request to a server.
    }
  }
}
</script>
