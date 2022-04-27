<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import {useIdentityStore} from "@/stores/identityStore";
var identityStore = useIdentityStore();
var logout = () => {
  console.log("logging out");
  identityStore.forget();
}
var user = identityStore.$state.identified;
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <span v-if="!identityStore.$state.identified">
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </span>
      <span v-if="identityStore.$state.identified">
        <span v-on:click="logout">Logout</span>
      </span>
    </nav>
  </header>
  <RouterView />
</template>

<style>
@import '@/assets/base.css';
</style>
