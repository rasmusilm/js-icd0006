<template>
  <div class="error-container" v-for="error of errors" v-if="showErrors">
    <div class="error">{{error}}</div>
  </div>
  <input v-model="username" type="text" placeholder="Username">
  <br />
  <input v-model="email" type="text" placeholder="email" id="login-username">
  <br />
  <input v-model="password" type="password" placeholder="password">
  <br/>
  <input v-model="control_password" type="password" placeholder="repeat password">
  <br/>
  <input type="submit" @click="register" value="Login">
</template>

<script lang="ts">
import {Vue} from "vue-class-component";
import {IdentityService} from "@/services/IdentityService";
import router from "@/router";
import {useIdentityStore} from "@/stores/identityStore";

export default class Register extends Vue{
  username = "rasmus1";
  password = "rasmus1234";
  email = "rapost@mail.ee";
  control_password = "rasmus1234";
  errors: string[] = [];
  showErrors = false;
  identityService = new IdentityService();
  identityStore = useIdentityStore();

  async register(): Promise<void> {
    this.errors = [];
    if (this.password.length > 3 && this.password === this.control_password && this.username.length > 2) {
      // alert(`Registered with ${this.password} for ${this.email}`)
      console.log(this.username + " " + this.email + " " + this.password);
    } else {
      if (this.password !== this.control_password) {
        this.errors.push("The passwords must mach")
      }
      if (!(this.username.length > 2)) {
        this.errors.push("Username must be at least 3 characters long")
      }
      if (!(this.password.length > 3)) {
        this.errors.push("Passworm must be at least 4 characters long")
      }
      this.showErrors = true;
    }
    let response = await this.identityService.register(this.email, this.password, this.username)
    if (response.status == 200) {
      this.identityStore.identify(response.data!);
      console.log(response)
      await router.push("/feed");
      console.log("pushed");
    } else {
      for (let errorMsgKey in response.errors) {
        this.errors.push(errorMsgKey)
      }
      this.showErrors = true;
    }
  }
}
</script>

<style scoped>
.error {
  color: firebrick;
}
</style>