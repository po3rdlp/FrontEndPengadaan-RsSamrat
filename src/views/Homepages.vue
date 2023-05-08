<template>
  <div>
    <p>Hello This is Home pages</p>
    {{ message }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Homepages",

  computed: {
    ...mapGetters(["message"]),
  },
};
</script>
