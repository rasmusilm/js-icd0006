<template>
  <div class="id-container">
    <div class="id-field">
      <input v-model="username" type="text" placeholder="Username" id="login-username">
      <br />
      <input v-model="password" type="password" placeholder="password">
      <br/>
      <input type="submit" @click="login" value="Login">
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import {useIdentityStore} from "@/stores/identityStore";

export default defineComponent({
  name: "LoginView",
  data() {
    return {
      password: "",
      username: ""
    }
  },
  methods: {
    login(): void {
      console.log(this.username + " " + this.password);
    }
  }

})

</script>

<style scoped>

</style>