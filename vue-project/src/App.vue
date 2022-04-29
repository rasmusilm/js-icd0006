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

  </header>
  <nav>
    <ul class="navigation-list">
      <li>
        <RouterLink to="/" class="nav-item">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about" class="nav-item">About</RouterLink>
      </li>
      <span v-if="!identityStore.$state.identified" class="identity">
        <li>
          <RouterLink to="/register" class="nav-item">Register</RouterLink>
        </li>
        <li>
          <RouterLink class="nav-item" to="/login">Login</RouterLink>
        </li>
      </span>

      <span v-if="identityStore.$state.identified" class="identity">
        <li>
          <span v-on:click="logout" class="nav-item">Logout</span>
        </li>
      </span>
    </ul>

  </nav>
  <RouterView />
</template>

<style>
  @import '@/assets/base.css';
  @import '@/assets/content-structure.css';
</style>
