import { createStore } from "vuex";
import router from "../router";
import axios from "axios";

const store = createStore({
  state: {
    isLoggedIn: false,
    message: "",
  },
  mutations: {
    SET_IS_LOGGED_IN(state, value) {
      state.isLoggedIn = value;
    },
    SET_MESSAGE(state, message) {
      state.message = message;
    },
  },
  actions: {
    login({ commit }, vendor) {
      axios
        .post("http://rsudsamrat.site:8080/owners/login", vendor)
        .then((response) => {
          commit("SET_IS_LOGGED_IN", true);
          commit("SET_MESSAGE", response.data);
          router.push("/");
        })
        .catch((err) => {
          console.log(`GAGAL: ${err}`);
        });
    },
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    message: (state) => state.message,
  },
});

export default store;
