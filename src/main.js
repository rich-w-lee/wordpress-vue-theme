import Vue from 'vue';
import router from './router';
import App from './App.vue';
import store from './store';
import HttpClient from './utils/HttpClient';

Vue.prototype.$http = new HttpClient();

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});
