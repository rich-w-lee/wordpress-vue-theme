<template>
  <div id="app">
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
      // wpData: wpData //uncomment this when building for production
    }
  },
  mounted () {
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
