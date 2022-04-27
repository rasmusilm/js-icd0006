<template>
  <input v-model="username" type="text" placeholder="Username" id="login-username">
  <br />
  <input v-model="password" type="password" placeholder="password">
  <br/>
  <input v-model="control_password" type="password" placeholder="repeat password">
  <br/>
  <input type="submit" @click="register" value="Login">
</template>

<script lang="ts">
export default {
  name: "RegisterView",
  data() {
    return {
      password: "",
      username: "",
      control_password: "",
    }
  },
  methods: {
    register(): void {
      if (this.password === this.control_password) {
        alert(`Registered with ${this.password} for ${this.username}`)
        // console.log(this.username + " " + this.password);
      }

    }
  }
}
</script>

<style scoped>

</style>