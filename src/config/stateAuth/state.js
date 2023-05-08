import { createStore } from "vuex";
import router from "../router";
import axios from "axios";

const store = createStore({
  state: {
    isLoggedIn: false,
    message: "",
    username: null,
    vendoruuid: null,
  },
  mutations: {
    SET_IS_LOGGED_IN(state, value) {
      state.isLoggedIn = value;
    },
    SET_MESSAGE(state, message) {
      state.message = message;
    },
    SET_USERNAME(state, username) {
      state.username = username;
    },
    SET_VENDOR_UUID(state, vendoruuid) {
      state.vendoruuid = vendoruuid;
    },
  },
  actions: {
    login({ commit }, vendor) {
      axios
        .post("http://rsudsamrat.site:8080/owners/login", vendor)
        .then((response) => {
          commit("SET_IS_LOGGED_IN", true);
          commit("SET_MESSAGE", response.data);
          commit("SET_USERNAME", vendor.username);
          // mengambil vendor uuid (getvendorbyownerid)
          axios
            .get(
              `http://rsudsamrat.site:8080/pengadaan/dev/v1/vendors/owner/${response.data.id}`
            )
            .then((vendorResponse) => {
              commit("SET_VENDOR_UUID", vendorResponse.data.vendoruuid);
              console.log(vendorResponse.data.vendoruuid);
              router.push("/");
            })
            .catch((err) => {
              console.log(`Gagal mengambil VendorUUID, ${err}`);
            });
        })
        .catch((err) => {
          console.log(`GAGAL: ${err}`);
        });
    },
  },
  getters: {
    isLoggedIn: (state) => state.isLoggedIn,
    message: (state) => state.message,
    username: (state) => state.username,
    vendoruuid: (state) => state.vendoruuid,
  },
});

export default store;
