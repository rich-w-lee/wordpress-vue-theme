<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="../../static/logo.png"> -->
    <img alt="Vue logo" :src="logoURL">
    <div v-for="post in postData" :key="post.id">
      {{ post.title.rendered }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      postData: [],
      logoURL: '',
      // wpData: wpData //uncomment this when building for production
    }
  },
  created () {
    this.logoURL = this.wpData !== undefined ? `${this.wpData.template_directory_uri}/assets/logo.png` : 'http://localhost:8888/wp-content/themes/vue-wordpress/assets/logo.png'
    const restURL = this.wpData !== undefined ? this.wpData.rest_url : 'http://localhost:8888/wp-json'
    fetch(`${restURL}/wp/v2/posts`)
      .then((response) => response.json())
      .then((data) => { this.postData = data })
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
