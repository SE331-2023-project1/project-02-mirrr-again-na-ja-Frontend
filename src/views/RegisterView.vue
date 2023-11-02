<script setup lang="ts">
import { useRouter } from "vue-router";
import { useMessageStore } from "@/stores/message";
import { useAuthStore } from "@/stores/auth";
import * as yup from "yup";
import { useField, useForm } from "vee-validate";
import InputText from "@/components/InputText.vue";

const router = useRouter();
const authStore = useAuthStore();
const messageStore = useMessageStore();

const validationSchema = yup.object({
  studentID: yup.string().required("Username is required."),
  password: yup.string().required("Password is required."),
  name: yup.string().required("Firstname is required."),
  surname: yup.string().required("Lastname is required."),
});
const { errors, handleSubmit } = useForm({
  validationSchema,
  initialValues: {
    studentID: "",
    password: "",
    name: "",
    surname: "",
  },
});

const { value: studentID } = useField<string>("studentID");
const { value: password } = useField<string>("password");
const { value: name } = useField<string>("name");
const { value: surname } = useField<string>("surname");

const onSubmit = handleSubmit((values) => {
  console.log(values);
  authStore
    .registerStudent(
      values.studentID,
      values.password,
      values.name,
      values.surname
    )
    .then(() => {
      console.log("Register Success.");
      router.push({ name: "Login" });
    })
    .catch((err) => {
      messageStore.updateflashcard("Resgister Success.");
      router.push({ name: "Login" });
      console.log(err);
      setTimeout(() => {
        messageStore.resetflashcard();
      }, 3000);
    });
});
</script>

<template>
  <div class="flex justify-center my-20">
    <div class="border-black-50 border-2 w-2/5">
      <div class="flex flex-col justify-center my-10">
        <div class="font-mono text-black">
          <h2 class="font-bold text-3xl text-center">
            Sign Up to Website
          </h2>
        </div>
        <div class="sm:mx-auto sm:w-full sm:max-w-sm font-mono mt-10">
          <form @submit.prevent="onSubmit">
            <div class="my-2">
              <label for="studentID" class="block text-sm font-bold leading-6 text-gray-900">Username</label>
              <InputText type="text" v-model="studentID" :error="errors['studentID']"></InputText>
            </div>
            <div class="my-2">
              <label for="password" class="block text-sm font-bold leading-6 text-gray-900">Password</label>
              <InputText type="password" v-model="password" :error="errors['password']"></InputText>
            </div>
            <div class="my-2">
              <label for="name" class="block text-sm font-bold leading-6 text-gray-900">Firstname</label>
              <InputText type="text" v-model="name" :error="errors['name']"></InputText>
            </div>
            <div class="my-2">
              <label for="surname" class="block text-sm font-bold leading-6 text-gray-900">Lastname</label>
              <InputText type="text" v-model="surname" :error="errors['surname']"></InputText>
            </div>
            <div class="flex justify-center mt-8">
              <button type="submit" class="font-mono text-center bg-white p-2 text-black hover:bg-black hover:text-white font-bold rounded-lg w-24 border-2 border-black">
                Sign-Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
