<template>
  <div id="app">
    <div>This is your theme data, use it wisely!</div>
    <img :src="`${$config.assetsDirectory}/vue-wordpress.png`" class="vue-wordpres-logo">
    <div>
      {{ themeData }}
    </div>
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

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;

  .vue-wordpres-logo {
    width: 200px;
    height: 200px;
  }
}
</style>
