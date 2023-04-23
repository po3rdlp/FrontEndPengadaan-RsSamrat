<script>
import Navigationbar from "./components/Navigationbar.vue";
import SideNavigationbar from "./components/SideNavigationbar.vue";

export default {
  name: "app",
  components: { Navigationbar, SideNavigationbar },
};
</script>

<template>
  <div>
    <Navigationbar />
    <SideNavigationbar />
  </div>
  <div>
    <div class="content">
      <RouterView />
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
</style>
