<template>
  <div>
    <div class="container">
      <div class="box1">
        <div class="box2">
          <form @submit.prevent="Submitform">
            <label for="name">Product Name:</label>
            <input
              type="text"
              v-model="product.name"
              placeholder="Product Name"
              id="Productname"
              class="input is-small"
              required
            />
            <label for="price">Price:</label>
            <input
              type="number"
              v-model="product.price"
              placeholder="Price"
              class="input is-small"
              required
            />
            <label for="quantity">Quantity:</label>
            <input
              type="number"
              v-model="product.quantity"
              placeholder="Quantity"
              class="input is-small"
              required
            />
            <label for="description">Description:</label>
            <input
              type="text"
              v-model="product.description"
              placeholder="Description"
              class="input is-small"
            />
            <button class="button is-small" type="submit">Submit</button>
          </form>
        </div>
        <p>{{ message }}</p>
        <div v-show="isLoading">
          <progress class="progress is-small is-primary" max="100">
            50%
          </progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Productpages",

  data() {
    return {
      isLoading: false,
      product: {
        name: "",
        price: "",
        quantity: "",
        description: "",
      },
      message: "",
    };
  },
  methods: {
    Submitform() {
      this.isLoading = true;
      axios
        .post(
          "http://rsudsamrat.site:8080/pengadaan/dev/v1/products/VEN1682790001791D435",
          this.product
        )
        .then((response) => {
          this.message = response.data;
          this.product.name = "";
          this.product.price = "";
          this.product.quantity = "";
          this.product.description = "";
          console.log(
            `Berhasil ditambahkan, Deskripsi: ${this.product.description}`
          );
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>

<style>
.container {
  display: flex;

  justify-content: center;
  align-items: center;
  height: auto;
}
.box1 {
  padding: 10px;

  height: 100%;
}
.box2 {
  background-color: rgb(176, 176, 176);
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
}

input {
  width: 5%;
}
</style>
