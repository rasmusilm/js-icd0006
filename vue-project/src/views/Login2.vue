<template>
  <div class="id-container">
    <div class="id-field">
      <div class="input-container">
        <label class="input-label" for="Email">Email</label>
        <input v-model="email" class="input-box" type="text" />
      </div>
      <div class="form-group">
        <label class="input-label" for="Password">Password</label>
        <input v-model="password" class="input-box" type="password" />
      </div>
      <div>
        <input @click="login()" type="submit" value="Login" class="submit" />
      </div>
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