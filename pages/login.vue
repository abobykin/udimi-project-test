<template>
  <div class="container">
    <div class="flex-content flex-content-centered">
      <form class="form form-centered" v-on:submit.prevent="login">
        <h1 class="form-heading">Login</h1>
        <div class="form-row">
          <input
            v-model="auth.data.email"
            class="form-control"
            placeholder="Email"
            type="text">
        </div>
        <div class="form-row">
          <input
            v-model="auth.data.password"
            type="password"
            class="form-control"
            placeholder="Password"
          />
        </div>
        <input
          value="Login" type="submit" class="form-button"
          :disabled="!auth.data.email || !auth.data.password"
        >
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  middleware: ['auth'],
  data() {
    return {
      error: null,
      auth: {
        data: {
          email: '',
          password: ''
        }
      }
    }
  },
  methods: {
    async login() {
      this.error = null
      await this.$auth.login(this.auth);
      this.$router.push('/projects');
    }
  }
}
</script>

<style>
  .navigation {display: none;}
</style>
