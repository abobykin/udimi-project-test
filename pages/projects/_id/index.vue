<template>
  <div class="container">
    <div class="flex-content flex-content-centered">
      <EditProject
        :project="project"
        class="project-box"
      />
    </div>
  </div>
</template>

<script>
import EditProject from '@/components/EditProject'
export default {
  components: {
    EditProject
  },
  middleware: ['auth'],
  props: ['name', 'id'],
  data() {
    return {
      project: this.$store.state.editProject,
    }
  },
  created() {
    const editedProject = this.$store.state.projects
    if (editedProject.length > 0) {
      this.project = editedProject.find(el => el.id == this.$route.params.id)
      this.$store.commit('editProject', {editProject: this.project})
    }
  },
  beforeDestroy() {
    this.$store.commit('editProject', {editProject: {}})
  }
}
</script>
