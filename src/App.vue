<template>
  <div>
    <div>
      {{ postData }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      postData: '',
    };
  },
  created () {
    this.$http.get('posts')
      .then(response => {
        console.log(response);
        this.postData = response.data;
      })
      .catch(e => {
        console.log(e);
      });
  },
};
</script>
