<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <h1 style="font-weight: bold">
            ID: {{ orders.id }}, Date: {{ orders.orderDate }}
          </h1>
        </div>
        <div class="modal-body">
          <table class="table is-bordered is-striped is-narrow is-hoverable">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="orderItem in orders.orderItems">
                <td>{{ orderItem.product.name }}</td>
                <td>{{ orderItem.quantity }}</td>
              </tr>
            </tbody>
          </table>
          <h1>Total Harga :{{ orders.payment.amount }}</h1>
        </div>
        <div class="buttons">
          <button class="button is-primary">Accept</button>
          <button class="button is-danger">Reject</button>
        </div>
        <button
          style="display: flex; justify-content: flex-end; margin-top: 10px"
          class="button is-warning"
          @click="$emit('close')"
        >
          close
        </button>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    show: Boolean,
    orders: Object,
  },

  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
.buttons {
  margin-right: 0.5em;
}
</style>
