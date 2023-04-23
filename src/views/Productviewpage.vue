<template>
  <div v-for="product in products" :key="product.id">
    <div class="card">
      <img
        src="https://imgs.search.brave.com/W2jVaSZCbZME_eqOQ_h3jHbi8sMbFiyUfp11L_6p6Ls/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5B/ZG9KQXNpV2R3TU5H/MFpUdlVvVFVRSGFI/YSZwaWQ9QXBp"
        alt="Card image"
      />
      <div class="card-content">
        <h2>Nama Barang</h2>
        <p>{{ product.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Productpagesview",

  data() {
    return {
      products: [],
    };
  },
  created() {
    axios
      .get("http://localhost:8080/products/vendor/VEN168216544493415F1")
      .then((response) => {
        this.products = response.data;
        console.log("Berhasil");
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.card {
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
  overflow: hidden;
}

.card img {
  width: 100px;
  height: 300px;
}

.card-content {
  padding: 16px;
}

.card-content h2 {
  margin: 0;
  font-size: 24px;
}

.card-content p {
  margin: 16px 0;
}

.button {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
}

.button:hover {
  background-color: #0069d9;
}
</style>
