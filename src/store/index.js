import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex)

var apiURL = process.env.VUE_APP_API_URL;

export default new Vuex.Store({
  strict: true,
  state: {
    users: []
  },
  getters: {
    getUsers(state) {
      return state.users;
    }
  },
  mutations: {
    addUser(state, data) {
      state.users.push(data);
    },
    setUsers(state, data){
      state.users = data;
    },
  },
  actions: {
    async addUser({ commit }, data) {
      await axios.post(apiURL + "usersForm/", data)
      .then(response => {
        let result = response.data;
        commit('addUser', data);
        return result;
      })
    },
    async getUsersFromAPI({ commit }) {
      await axios.get(apiURL + "usersForm/")
      .then(response => {
        let result = response.data;
        commit('setUsers', result);
        return result;
      })
    }
  },
})
