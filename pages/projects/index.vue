<template>
  <div class="container">
    <div class="flex-content flex-content-centered">
      <h1>Projects</h1>
      <div class="project-list">
        <Project
          v-for="project in projects" :key="project.id"
          :name="project.name"
          :id="project.id"
          :status="project.is_active"
          class="project-box"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Project from '@/components/Project'

export default {
  middleware: ['auth'],
  components: {
    Project
  },
  data() {
    return {
      error: null,
      projects: this.$store.state.projects
    }
  },
  mounted() {
    this.$axios.get('projects', {
      headers: {
        Authorization: this.$auth.getToken('local')
      }
    })
    .then(res => {
      this.projects = res.data.projects
      this.$store.commit('setProjects', {projects: res.data.projects})
    })
  }
}
</script>

<style scoped lang="scss">
  .project {
    &-list {
      margin: 20px 0;
      width: 90%;
      max-width: 600px;
    }
    &-box {
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 10px;
      background-color: #fff;
      border-radius: 3px;
      border: 1px solid #dedede;
      padding: 18px 20px 20px 25px;
      cursor: pointer;
      font-size: .9em;
      margin-bottom: 10px;
      color: black;
    }
  }
</style>
