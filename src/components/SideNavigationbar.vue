<script>
export default {
  name: "SideNavigationbar",
};
</script>

<template>
  <div>
    <nav>
      <div class="sidebar">
        <div>
          <router-link to="/" class="nav-link">Home</router-link>
        </div>
        <div>
          <router-link to="/vendorInput" class="nav-link">Vendor</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
}

.sidebar {
  width: 15%;
  height: 100vh;
  position: fixed;
  background-color: rgb(239, 238, 238);
  z-index: 1;
}

.nav-link {
  display: block;
  padding: 10px 20px;
  color: rgb(91, 91, 91);
  text-decoration: none;
  margin-bottom: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: gray;
}
</style>
