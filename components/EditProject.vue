<template>
  <form class="form" v-on:submit.prevent="onSaveProject">
    <h1 class="form-heading">Edit Project</h1>
    <div class="form-row">
      <label>Name</label>
      <input
        v-model="currentProject.name"
        class="form-control"
        placeholder="Name"
        name="email"
        type="text">
    </div>
    <input
      value="Save"
      type="submit"
      class="form-button"
    >
  </form>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return {
      error: null,
      currentProject: {}
    }
  },
  mounted() {
    this.currentProject = this.project
  },
  methods: {
    async onSaveProject() {
      this.error = null
      await this.$axios.post(`projects-manage/update?id=${this.currentProject.id}`, {
        name: this.currentProject.name
      })
      this.$router.push('/projects');
    }
  }
}
</script>

<style scoped="true" lang="scss">

</style>
