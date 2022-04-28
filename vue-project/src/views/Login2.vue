<template>
  <div>
    <div class="">
      <label class="" for="Email">Email</label>
      <input v-model="email" class="" type="text" />
    </div>
    <div class="form-group">
      <label class="" for="Password">Password</label>
      <input v-model="password" class="" type="password" />
    </div>
    <div class="">
      <input @click="login()" type="submit" value="Login" class="" />
    </div>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import {useIdentityStore} from "@/stores/identityStore";
import {IdentityService} from "@/services/IdentityService";
import router from "@/router";

@Options({
  components: {
  },
  props: {},
  emits: [],
})
// @ts-ignore
export default class Login extends Vue {
  email: string = "rasmus.ilmjarv@gmail.com";
  password: string = "Hea.Parool.1";
  identityStore = useIdentityStore();
  identityService: IdentityService = new IdentityService();

  async login() : Promise<void> {
    // alert(`testing ${this.email} with ${this.password}`)
    console.log('submitClicked');
    var res = await this.identityService.login(this.email, this.password);
    console.log(res);
    console.log(res.data!);
    this.identityStore.identify(res.data!);

    router.push("/feed");
  }
}
</script>

<style scoped>

</style>