<script setup lang="ts">
import InputText from "@/components/InputText.vue";
import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

import { useMessageStore } from "@/stores/message";

const messageStore = useMessageStore();
const router = useRouter();

const authStore = useAuthStore();

const validationSchema = yup.object({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
const { errors, handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    username: "",
    password: "",
  },
});

const { value: username } = useField<string>("username");
const { value: password } = useField<string>("password");

const onSubmit = handleSubmit((value) => {
  authStore
    .login(value.username, value.password)
    .then(() => {
      if (authStore.isAdvisor) {
        router.push({ name: "AdviserHome" });
      } else if (authStore.isStudent) {
        router.push({
          name: "adviser-detail",
          params: { id: authStore.student?.id },
        });
      } else if (authStore.isAdmin) {
        router.push({ name: "students" });
      }
    })
    .catch(() => {
      // messageStore.updateflashcard('Could not login')
      messageStore.updateflashcard("Could not login");
      console.log("Could not login");
      setTimeout(() => {
        messageStore.resetflashcard();
      }, 3000);
    });
});
</script>

<template>
  <div class="containerd">
    <div class="login-section flex justify-center">
      <div class="border-2 p-10 w-1/2 h-96 flex justify-center mt-28 rounded-lg">
        <form @submit.prevent="onSubmit">
        <div class="justify-center font-mono">
          <label for="username" class="my-2">Username:</label>
          <InputText
            type="text"
            v-model="username"
            :error="errors['username']"
            class="my-2 w-72"
          />
          <label for="username" class="my-2">Password:</label>
          <InputText
            type="password"
            v-model="password"
            :error="errors['password']"
            class="my-2 w-72"
          />
        </div>
        <div class="mt-7 flex justify-center">
          <button type="submit" class="mx-auto border-2 border-black py-2 px-5 rounded-lg hover:shadow-grey-300 hover:shadow-lg hover:font-bold font-bold"
          >Login</button>
        </div>
        <div class="text-center my-5">
          <p class="font-mono my-5">or</p>
          <div class="font-mono font-bold text-lg">
            <RouterLink
            to="/registerStudent"
            active-class="active-link"
            exact-active-class="active-link"
            class="underline"
            >Register</RouterLink>
          </div>
        </div>
      </form>
      </div>
    </div>
  </div>
</template>


<style>
.containerd {
  display: flex;
}

.picture-section {
  flex: 0 0 33.33%; /* Cover 33.33% of the screen's width */
  position: relative;
}

.image-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90vh; /* Set the height to cover the full viewport height */
  background-image: url('/src/assets/cat&chess.jpg');
  background-size: cover;
  background-position: center;
}

.login-section {
  flex: 1;
}
</style>

