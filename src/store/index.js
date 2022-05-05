import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { auth } from './modules/auth.module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth
  },
  plugins: [
    createPersistedState({
      paths: ['auth.user'],
      key: 'user_login'
    })
  ]
})

export default store
