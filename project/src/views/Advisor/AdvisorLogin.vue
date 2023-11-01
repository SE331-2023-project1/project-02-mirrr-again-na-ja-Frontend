<script setup lang="ts"></script>

<template>
  <div class="flex justify-center">
    <img
      class="w-96 h-52"
      src="https://1000logos.net/wp-content/uploads/2021/11/My-Hero-Academia-Logo.png"
      alt="Logo"
    />
  </div>
  <div class="text-5xl text-center font-mono">Login</div>
  <div class="text-center mt-4 font-mono text-2xl">
    <form @submit.prevent="login">
      <p>
        <label class="mr-96 pr-64 block font-bold mt-3">Email: </label>
        <input
          class="w-4/12 border-gray-600 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 mt-2"
          v-model="username"
          type="text"
          placeholder=" Email "
        />
      </p>
      <p>
        <label class="mr-96 pr-52 block font-bold mt-3">Password: </label>
        <input
          class="w-4/12 border-gray-600 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 mt-2"
          v-model="password"
          type="password"
          placeholder=" Password "
        />
      </p>
      <RouterLink to="main-AJ">
        <button class="bg-red-600 text-white rounded-xl h-11 w-28 mt-4 text-2xl" type="submit">
          Login
        </button>
      </RouterLink>
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
