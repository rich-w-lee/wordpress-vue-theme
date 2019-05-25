// for global actions
import HttpClient from '../utils/HttpClient';

const http = new HttpClient();

export default {
  getPosts(context) {
    http.get('posts')
      .then((res) => {
        context.commit('updatePosts', res.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }
};
