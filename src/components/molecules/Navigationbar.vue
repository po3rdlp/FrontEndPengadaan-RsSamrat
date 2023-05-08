<template>
  <nav>
    <h1>RS Samrat Pengadaan</h1>
    <button class="button is-link" @click="showmodalLogin = true">Login</button>
  </nav>

  <Teleport to="body">
    <LoginModal :show="showmodalLogin" @close="showmodalLogin = false" />
  </Teleport>
</template>

<script>
import LoginModal from "../modals/Login.vue";

export default {
  components: { LoginModal },

  data() {
    return {
      showmodalLogin: false,
    };
  },
};
</script>

<style src="../style/Login.css" />
