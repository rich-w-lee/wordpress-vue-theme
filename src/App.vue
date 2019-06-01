<template>
  <div id="app">
    This is your theme data, use it wisely!
    <br>
    {{ themeData }}
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['themeData']),
  },
  created () {
    this.getPosts();
  },
  methods: {
    ...mapActions(['getPosts']),
  },
};
</script>
