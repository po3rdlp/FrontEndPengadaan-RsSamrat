<template>
  <nav class="navbar">
    <div class="navbar__text">PENGADAAN RSUD SAMRAT</div>
    <RouterLink to="/Login" class="navbar__text navbar__text--right"
      >Login</RouterLink
    >
  </nav>
</template>

<style scoped>
/* styling untuk navigation bar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
  padding: 10px;
}

/* styling untuk teks di dalam navigation bar */
.navbar__text {
  color: white;
  font-size: 15px;
  font-weight: bold;
}

/* styling khusus untuk teks di sebelah kanan */
.navbar__text--right {
  margin-left: auto;
}
</style>
