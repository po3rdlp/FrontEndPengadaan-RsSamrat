<template>
  <nav>
    <h1>RS Samrat Pengadaan</h1>
    <RouterLink class="textroute" to="/Login">Login</RouterLink>
  </nav>
</template>

<style scoped>
/* styling untuk navigation bar */

nav {
  background-color: gray;
  position: fixed;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
}
nav h1 {
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: normal;
  color: white;
  margin-right: auto;
}
.textroute {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-size: 16px;
}
</style>
