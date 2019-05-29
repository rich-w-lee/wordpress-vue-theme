import axios from 'axios';

export default class HttpClient {
  API_BASE_PATH = '/wp-json/wp/v2';

  constructor () {
    try {
      axios.defaults.headers.common = {
        'X-CSRF-TOKEN': typeof window.WordPress !== 'undefined' ? window.WordPress.csrfToken : '',
        'X-Requested-With': 'XMLHttpRequest',
      };
    } catch (e) {
      console.log(e);
    }
  }
  get (path) {
    return axios.get(`${this.API_BASE_PATH}/${path}`);
  }
  post (path, body) {
    return axios.post(`${this.API_BASE_PATH}/${path}`, body);
  }
  put (path, body) {
    return axios.put(`${this.API_BASE_PATH}/${path}`, body);
  }
}
