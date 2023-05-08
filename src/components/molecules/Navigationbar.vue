<template>
  <nav>
    <h1>RS Samrat Pengadaan</h1>
    <button
      class="button is-link"
      @click="showmodalLogin = true"
      v-if="!isLoggedIn"
    >
      Login
    </button>
    <button class="button is-link" @click="logout" v-else>Logout</button>
  </nav>

  <Teleport to="body">
    <LoginModal :show="showmodalLogin" @close="showmodalLogin = false" />
  </Teleport>
</template>

<script>
import LoginModal from "../modals/Login.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: { LoginModal },

  data() {
    return {
      showmodalLogin: false,
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn", "isLoggedOut"]),
  },
  methods: {
    ...mapMutations(["SET_IS_LOGGED_IN"]),
    logout() {
      this.SET_IS_LOGGED_IN(false);
    },
  },
};
</script>

<style src="../style/Login.css" />
