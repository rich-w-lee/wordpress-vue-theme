import axios from 'axios';

export default class HttpClient {
  API_BASE_PATH = '/wp-json/wp/v2';

  constructor () {
    axios.defaults.headers.common = {
      'X-CSRF-TOKEN': typeof window.WordPress !== 'undefined' ? window.WordPress.csrfToken : '',
      'X-Requested-With': 'XMLHttpRequest',
    };
  }
  get (path, config = {}) {
    return axios.get(`${this.API_BASE_PATH}/${path}`, config);
  }
  post (path, body, config = {}) {
    return axios.post(`${this.API_BASE_PATH}/${path}`, body, config);
  }
  put (path, body, config = {}) {
    return axios.put(`${this.API_BASE_PATH}/${path}`, body, config);
  }
}
