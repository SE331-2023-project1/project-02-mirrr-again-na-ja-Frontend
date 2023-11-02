<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { ref, type PropType } from "vue";
import { useMessageStore } from "./stores/message";
import { storeToRefs } from "pinia";
import { useAuthStore } from "./stores/auth";
import { useRouter } from "vue-router";
import type { StudentItem } from "./type";

const store = useMessageStore();
const { flashMessage } = storeToRefs(store);
const authStore = useAuthStore();
const router = useRouter();

function logout() {
  authStore.logout();
  router.push({ name: "login" });
}

const token = localStorage.getItem("token");
const student = localStorage.getItem("student");
const advisor = localStorage.getItem("advisor");
if (token && student) {
  authStore.reloadStudent(token, JSON.parse(student));
} else if (token && advisor) {
  authStore.reloadStudent(token, JSON.parse(advisor));
} else {
  authStore.logout();
}

const props = defineProps({
  student: {
    type: Object as PropType<StudentItem>,
    require: true,
  },
});
</script>

<template>
  <header>
    <nav
      class="bg-blue-600 h-20 flex justify-between items-center text-white font-mono"
    >
<!--      <div>-->
<!--        <p class="text-white text-left text-4xl ml-10">Wait We Have Project?</p>-->
<!--      </div>-->
      <!-- For user un-login page -->

      <div class="flex justify-left pl-5">
        <img
            class="w-36 h-20"
            src="https://1000logos.net/wp-content/uploads/2021/11/My-Hero-Academia-Logo.png"
            alt="Logo"
        />
      </div>
      <div class="mt-1 mr-10 rounded-md bg-white px-2">
        <RouterLink
            to="/"
            class="text-black hover:shadow-grey-300 hover:shadow-lg hover:font-bold text-xl"
            active-class="active-link"
            exact-active-class="active-link"
        >Login</RouterLink
        >
      </div>

<!--      <ul-->
<!--        v-if="-->
<!--          !authStore.currentUserNameAdvisor && !authStore.currentUserNameStudent-->
<!--        "-->
<!--      >-->
<!--        <div class="mt-1 mr-10 rounded-md bg-white px-2">-->
<!--          <RouterLink-->
<!--            to="/"-->
<!--            class="text-black hover:shadow-grey-300 hover:shadow-lg hover:font-bold text-xl"-->
<!--            active-class="active-link"-->
<!--            exact-active-class="active-link"-->
<!--            >Login</RouterLink-->
<!--          >-->
<!--        </div>-->
<!--      </ul>-->
<!--      &lt;!&ndash; for Student &ndash;&gt;-->
<!--      <ul v-if="authStore.isStudent">-->
<!--        <div class="flex space-x-5 mr-10">-->
<!--          <p-->
<!--            class="text-black transition-colors duration-300 hover:text-black text-xl font-bold"-->
<!--          >-->
<!--            {{ authStore.currentUserNameStudent }}-->
<!--          </p>-->
<!--          <RouterLink-->
<!--            to="/"-->
<!--            class="text-black transition-colors duration-300 hover:text-black text-xl underline underline-offset-1"-->
<!--            active-class="active-link"-->
<!--            exact-active-class="active-link"-->
<!--            @click="logout"-->
<!--            >Logout</RouterLink-->
<!--          >-->
<!--        </div>-->
<!--      </ul>-->
<!--      &lt;!&ndash; for Advisor or Admin(advisor)&ndash;&gt;-->
<!--      <ul v-if="authStore.isAdvisor">-->
<!--        <div class="flex space-x-5 mr-10">-->
<!--          <p-->
<!--            class="text-black transition-colors duration-300 hover:text-black text-xl font-bold"-->
<!--          >-->
<!--            {{ authStore.currentUserNameAdvisor }}-->
<!--          </p>-->
<!--          <RouterLink-->
<!--            to="/"-->
<!--            class="text-black transition-colors duration-300 hover:text-black text-xl underline underline-offset-1"-->
<!--            active-class="active-link"-->
<!--            exact-active-class="active-link"-->
<!--            @click="logout"-->
<!--            >Logout</RouterLink-->
<!--          >-->
<!--        </div>-->
<!--      </ul>-->
<!--      &lt;!&ndash; for Admin &ndash;&gt;-->
<!--      <ul v-if="authStore.isAdmin">-->
<!--        <div class="flex space-x-5 mr-10">-->
<!--          <p-->
<!--            class="text-black transition-colors duration-300 hover:text-black text-xl font-bold"-->
<!--          >-->
<!--            {{ authStore.currentUserNameAdvisor }}-->
<!--          </p>-->
<!--          <RouterLink-->
<!--            to="/students"-->
<!--            class="text-black transition-colors duration-300 hover:text-black text-xl underline underline-offset-1"-->
<!--            active-class="active-link"-->
<!--            exact-active-class="active-link"-->
<!--            >Student</RouterLink-->
<!--          >-->
<!--          <RouterLink-->
<!--            to="/advisors"-->
<!--            class="text-black transition-colors duration-300 hover:text-black text-xl underline underline-offset-1"-->
<!--            active-class="active-link"-->
<!--            exact-active-class="active-link"-->
<!--            >Advisor</RouterLink-->
<!--          >-->
<!--          <RouterLink-->
<!--            to="/registerAdvisor"-->
<!--            class="text-black transition-colors duration-300 hover:text-black text-xl underline underline-offset-1"-->
<!--            active-class="active-link"-->
<!--            exact-active-class="active-link"-->
<!--            >Add-Advisor</RouterLink-->
<!--          >-->

<!--          <RouterLink-->
<!--            to="/"-->
<!--            class="text-black transition-colors duration-300 hover:text-black text-xl underline underline-offset-1"-->
<!--            active-class="active-link"-->
<!--            exact-active-class="active-link"-->
<!--            @click="logout"-->
<!--            >Logout</RouterLink-->
<!--          >-->
<!--        </div>-->
<!--      </ul>-->
    </nav>
    <div>
      <div
        class="transition bg-black duration-3000"
        v-if="flashMessage"
      >
        <h4 class="text-center font-mono text-white">{{ flashMessage }}</h4>
      </div>
      <RouterView />
    </div>
  </header>
</template>

<style scoped>
.active-link {
  color: rgb(0, 0, 0);
}
.navbar-bg {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(245, 245, 245, 1) 59%,
    rgba(255, 255, 255, 1) 100%
  );
}
</style>
