<template>
  <div class="id-container">
    <div class="id-field">
      <div class="error-container" v-for="error of errors" v-if="showErrors">
        <div class="error">{{error}}</div>
      </div>
      <input class="input-box" v-model="username" type="text" placeholder="Username">
      <br />
      <input class="input-box" v-model="email" type="text" placeholder="email" id="login-username">
      <br />
      <input class="input-box" v-model="password" type="password" placeholder="password">
      <br/>
      <input class="input-box" v-model="control_password" type="password" placeholder="repeat password">
      <br/>
      <input class="submit" type="submit" @click="register" value="Register">
    </div>
  </div>
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

.id-container {
  min-height: 80vh;
  position: relative;
  /*border: 3px solid red;*/
}

.id-field {
  /*border: 3px solid white;*/
  position: absolute;
  padding-left: 6rem;
  padding-right: 6rem;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.input-container {
  text-align: left;
}

.input-label {
  color: #d3d3d3;
  width: 100%;
  display: block;
  padding-top: 0.75rem;
  padding-bottom: 0.25rem;
}

.input-box {
  width: 15rem;
  padding-bottom: 0.6rem;
  padding-top: 0.6rem;
  background-color: #363535;
  border-radius: 5px;
  border: 1px solid #2d2f3a;
  color: #949191;
}

.submit {
  align-content: center;
  margin-left: 32%;
  margin-top: 3rem;
  background: rgba(73, 69, 69, 0.99);
  border-radius: 0.4rem;
  padding: 0.4rem;
  padding-right: 1.4rem;
  padding-left: 1.4rem;
}
</style>