<template>
  <nuxt-link :to="'/projects/' + id">
    <div class="logo">
      <div class="avatar">
        <div class="empty-avatar">
          MP
        </div>
      </div>
    </div>
    <div class="name">
      <div class="name">{{ name }}</div>
    </div>
    <div class="status">
      <div class="status m-active">{{ projectStatus }}</div>
      <div class="users">No users</div>
    </div>
    <div class="stats">
      <div class="stats-row">
        <div class="titles">time this week</div>
        <div class="counts">00:00:00</div>
      </div>
      <div class="stats-row">
        <div class="titles">this month</div>
        <div class="counts">00:00:00</div>
      </div>

      <div class="stats-row">
        <div class="titles">total</div>
        <div class="counts">00:00:00</div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['name', 'id', 'status', 'users', 'titles', 'counts'],
  computed: {
    projectStatus: function() {
      return (this.status == 1) ? 'Active' : ''
    }
  }
}
</script>

<style scoped="true" lang="scss">

</style>
