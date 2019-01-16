<template>
  <div class="container">
    <div class="flex-content flex-content-centered">
      <h1>Homepage</h1>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  options: {
    auth: false
  },
  fetch ({ store, redirect }) {
    if (this.$auth.loggedIn) {
      return redirect('/projects')
    }
  }
}
</script>

