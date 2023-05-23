<template>
  <div>
    <h1>WELCOME {{ username }}</h1>
    {{ message }}
    {{ vendoruuid }}
  </div>
  <button style="margin-top: 50px" class="button is-danger" @click="showModalb">
    Lihat Penawaran
  </button>

  <Teleport to="body">
    <!-- pakai komponen modal, passing ke prop(lihat Editproduct.vue) -->
    <modal :show="showBidsModal" @close="showBidsModal = false" />
  </Teleport>
</template>

<script>
import { mapGetters } from "vuex";
import modal from "../components/modals/Bids.vue";

export default {
  name: "Homepages",
  components: { modal },
  data() {
    return {
      showBidsModal: false,
    };
  },

  computed: {
    ...mapGetters(["message", "username", "vendoruuid"]),
  },

  methods: {
    showModalb() {
      this.showBidsModal = true;
    },
  },
};
</script>
