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
          <th>Amount</th>
        </tr>
      </thead>
      <tbody v-for="datas in data" :key="datas.id">
        <tr v-for="orderItem in datas.orderItems" :key="orderItem.id">
          <td>{{ datas.id }}</td>
          <td>{{ datas.orderDate }}</td>
          <td>{{ orderItem.product.name }}</td>
          <td>{{ orderItem.quantity }}</td>
          <td>{{ datas.payment.amount }}</td>
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
        `http://rsudsamrat.site:8080/pengadaan/dev/v1/orders/${this.vendorid}/vendor`
      ) //getorderbyvendorid
      .then((response) => {
        this.data = response.data;
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
