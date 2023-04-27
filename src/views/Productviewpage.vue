<template>
  <div v-if="connectionFailed && products == null" class="failedconnect">
    <h1>KONEKSI GAGAL</h1>
  </div>
  <div v-for="product in products" :key="product.id">
    <div style="margin-left: 50%">
      <button
        class="button is-danger"
        @click="deleteProduct(product.productuuid, product.name)"
      >
        Delete
      </button>
      <button class="button is-primary" @click="selectProduct(product)">
        Edit
      </button>
    </div>
    <div class="card">
      <img src="../../src/components/img/user-interface.png" alt="Card image" />
      <div class="card-content">
        <h1>{{ product.name }}</h1>
        <p>{{ product.productuuid }}</p>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>

  <!-- Modals edit Product -->
  <Teleport to="body">
    <!-- pakai komponen modal, passing ke prop(lihat Editproduct.vue) -->
    <modal
      :show="showmodaleditProduct"
      :product="selectedProduct"
      @close="showmodaleditProduct = false"
    />
  </Teleport>
</template>

<script>
import axios from "axios";
import modal from "../components/modals/Editproduct.vue";

export default {
  name: "Productpagesview",
  components: { modal },

  data() {
    return {
      products: [],
      connectionFailed: false,
      showmodaleditProduct: false,
      selectedProduct: null,
    };
  },
  created() {
    axios /* datta produk berdasarkan uuid vendor */
      .get("http://localhost:8080/products/vendor/VEN168216544493415F1")
      .then((response) => {
        this.products = response.data;
        console.log("Berhasil mengambil data");
      })
      .catch((err) => {
        console.log(err);
        this.connectionFailed = true;
      });
  },
  methods: {
    deleteProduct(idproduk, namaproduk) {
      /* hapus produk berdasaarkan produkuuid */
      if (confirm(`Are you sure want to delete "${namaproduk}"`)) {
        axios
          .delete(`http://localhost:8080/products/${idproduk}`)
          .then((response) => {
            console.log(response.data);
            window.location.reload();
            console.log(`delete ${produk}`);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    selectProduct(produk) {
      this.showmodaleditProduct = true;
      this.selectedProduct = produk;
    },
  },
};
</script>

<style>
.card {
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;

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

.failedconnect {
  margin-top: 20%;
}
</style>
