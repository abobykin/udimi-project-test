import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    loginFormData: {
      email: '',
      password: ''
    },
    projects: [],
    editProject: {}
  },
  mutations: {
    setProjects(state, payload) {
      state.projects = payload.projects
    },
    editProject(state, payload) {
      state.editProject = payload.project
    }
  }
})

export default store
