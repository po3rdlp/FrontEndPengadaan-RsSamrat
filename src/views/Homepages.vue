<template>
  <div>
    <h1>WELCOME {{ username }}</h1>
    {{ message }}
    {{ vendoruuid }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Homepages",

  computed: {
    ...mapGetters(["message", "username", "vendoruuid"]),
  },
};
</script>
