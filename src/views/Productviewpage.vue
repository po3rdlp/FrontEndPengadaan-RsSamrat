<template>
  <div>
    <!--CHOOSE USER(TESTING WAITING OAUTH)-->
    <div>
      <label for="my-dropdown"> USER : </label>
      <select v-model="selectedUser" @change="selectUser(selectedUser)">
        <option v-for="user in users" :key="user.vendoruuid">
          {{ user.vendoruuid }}
        </option>
      </select>
      <p>You selected: {{ selectedUser }}</p>
    </div>
    <!-- IF USER == selected user show product :) -->
    <div v-if="selectedUser" class="containerCard">
      <div v-for="product in products" :key="product.id">
        <div class="card">
          <img src="../components/img/user-interface.png" alt="Card image" />
          <div class="card-content">
            <h1>{{ product.name }}</h1>
            <p>{{ product.productuuid }}</p>
            <p>{{ product.description }}</p>
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
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="connectionFailed && products == null" class="failedconnect">
    <h1>KONEKSI GAGAL</h1>
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
      users: [],
      products: [],

      connectionFailed: false,
      showmodaleditProduct: false,
      selectedProduct: null,
      selectedUser: null,
    };
  },
  created() {
    axios
      .get("http://rsudsamrat.site:8080/pengadaan/dev/v1/vendors")
      .then((response) => {
        this.users = response.data;
      })
      .catch((err) => {
        console.log(`Terjadi error guyss, ${err}`);
      });
  },
  methods: {
    deleteProduct(idproduk, namaproduk) {
      /* hapus produk berdasaarkan produkuuid */
      if (confirm(`Are you sure want to delete "${namaproduk}"`)) {
        axios
          .delete(
            `http://rsudsamrat.site:8080/pengadaan/dev/v1/products/${idproduk}`
          )
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
    /* Select product for edit */
    selectProduct(produk) {
      this.showmodaleditProduct = true;
      this.selectedProduct = produk;
    },
    /* Select Vendor uuid to show Vendor product */
    selectUser(useruuid) {
      this.selectedUser = useruuid;
      console.log(`hello`);
      axios /* datta produk berdasarkan uuid vendor */
        .get(
          `http://rsudsamrat.site:8080/pengadaan/dev/v1/products/vendor/${useruuid}`
        )
        .then((response) => {
          this.products = response.data;
          console.log("Berhasil mengambil data ", useruuid);
        })
        .catch((err) => {
          console.log(err);
          this.connectionFailed = true;
        });
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
  width: 50%;
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

.containerCard {
  padding: 350px;
  margin-top: -350px;
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
