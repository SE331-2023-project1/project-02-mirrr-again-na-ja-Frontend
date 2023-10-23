<script setup lang="ts">
</script>

<template>
  <div class="flex justify-center">
    <img
      class="w-96 h-52"
      src="https://1000logos.net/wp-content/uploads/2021/11/My-Hero-Academia-Logo.png"
      alt="Logo"/>
  </div>
  <div class="text-5xl text-center font-mono">Register</div>
  <div class="mt-6 font-mono">
    <form @submit.prevent="register" class="text-2xl text-center">
      <p class="">
        <label for="Name" class="block font-bold mb-2 pr-96 mr-64">Name:</label>
        <input
          class="w-4/12 border-gray-600 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 mt-2"
          v-model="name"
          type="text"
          placeholder="Name"/>
      </p>
      <p class="">
        <label for="Name" class="block font-bold mt-3 pr-96 mr-56">Surname: </label>
        <input
          class="w-4/12 border-gray-600 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 mt-2"
          v-model="surname"
          type="text"
          placeholder="Surname"/>
      </p>
      <p class="">
        <label for="Name" class="block font-bold mt-3 pr-96 mr-64">Email: </label>
        <input
        class="w-4/12 border-gray-600 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 mt-2"
          v-model="email"
          type="text"
          placeholder="Email"/>
      </p>
      <p class="">
        <label for="Name" class="block font-bold mt-3 pr-96 mr-52">Password: </label>
        <input
          class="w-4/12 border-gray-600 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300 mt-2"
          v-model="password"
          type="password"
          placeholder="Password"/>
      </p>
      <div class="text-center">
        <button class="bg-red-600 text-white rounded-xl h-11 w-36 mt-10 text-2xl text-center hover:font-bold" type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      // Add your login logic here, e.g., send a request to a server.
    }
  }
}
</script>