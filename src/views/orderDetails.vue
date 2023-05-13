<template>
  <div>
    <p>All orders that hospitals request is coming here.</p>
    <table>
      <thead>
        <tr>
          <th>Order Id</th>
          <th>Order Date</th>
          <th>Product Name</th>
          <th>quantity</th>
        </tr>
      </thead>
      <tbody v-for="datas in data" :key="datas.id">
        <tr>
          <td>{{ datas.orderId }}</td>
          <td>{{ datas.orderDate }}</td>
          <td>{{ datas.productName }}</td>
          <td>{{ datas.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      data: [],
    };
  },
  computed: {
    ...mapGetters(["vendoruuid", "vendorid"]),
  },
  created() {
    axios
      .get(
        `http://rsudsamrat.site:8080/pengadaan/dev/v1/orders/${this.vendorid}/0/10`
      ) //getordersbyvendoridwithpagenation
      .then((response) => {
        this.data = response.data.content;
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
