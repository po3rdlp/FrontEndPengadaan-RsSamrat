<script>
import Navigationbar from "./components/molecules/Navigationbar.vue";
import SideNavigationbar from "./components/molecules/SideNavigationbar.vue";
import Nologgedin from "./views/relativeViews/Nologgedin.vue";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: { Navigationbar, SideNavigationbar, Nologgedin },

  computed: {
    ...mapGetters(["isLoggedIn"]),
  },
};
</script>

<template>
  <Navigationbar />
  <div class="contentNoLoggedin" v-if="!isLoggedIn">
    <Nologgedin />
  </div>
  <div v-if="isLoggedIn">
    <SideNavigationbar />
    <div>
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style>
.content {
  text-align: center;
  padding-top: 60px;
  margin-right: 10px;
  margin-left: 160px;
}
.contentNoLoggedin {
  text-align: center;
  padding-top: 25%;
}
</style>
