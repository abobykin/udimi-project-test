<template>
  <div class="container">
    <div class="flex-content flex-content-centered navigation">
      <div v-if="this.$auth.loggedIn">
        <nuxt-link to="/projects" class="nav-link">Projects</nuxt-link>
        <span v-on:click="logout" class="nav-link">Logout</span>
      </div>
      <nuxt-link v-else to="/login" class="nav-link">Login</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  methods: {
    logout() {
      this.$auth.logout()
      return null
    }
  }
}
</script>

<style scoped lang="scss">
  .nav-link {
    color: orange; margin: 0 10px; text-decoration: underline;
    transition: opacity .4s; cursor: pointer; opacity: .75;
    &:hover, &:active {
      opacity: 1;
    }
  }
</style>
