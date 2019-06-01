import axios from 'axios';
import flushPromises from 'flush-promises';
import HttpClient from '../HttpClient';

jest.mock('axios');
describe('HttpClient.js', () => {
  let http;
  const API_BASE_PATH = '/wp-json/wp/v2';

  describe('constructor', () => {
    beforeEach(() => {
      global.window.WordPress = {
        csrfToken: 'testcsrfToken',
      };
    });

    it('inits the class with Wordpress CSRF Token', () => {
      http = new HttpClient();
      expect(axios.defaults.headers.common).toEqual({
        'X-CSRF-TOKEN': 'testcsrfToken',
        'X-Requested-With': 'XMLHttpRequest',
      });
    });

    it('inits the class without Wordpress CSRF Token', () => {
      delete global.window.WordPress;
      http = new HttpClient();
      expect(axios.defaults.headers.common).toEqual({
        'X-CSRF-TOKEN': '',
        'X-Requested-With': 'XMLHttpRequest',
      });
    });
  });

  describe('get', () => {
    it('executes a get call without config', async () => {
      http = new HttpClient();
      const path = 'testPath';
      const expectedValue = Promise.resolve({});
      axios.get.mockImplementation(() => expectedValue);
      const actualValue = http.get(path);
      await flushPromises();

      expect(axios.get).toBeCalledWith(`${API_BASE_PATH}/${path}`, {});
      expect(expectedValue).toEqual(actualValue);
    });

    it('executes a get call with config', async () => {
      http = new HttpClient();
      const path = 'testPath';
      const expectedValue = Promise.resolve({});
      axios.get.mockImplementation(() => expectedValue);
      const actualValue = http.get(path, { params: { testParam: 'test' } });
      await flushPromises();

      expect(axios.get).toBeCalledWith(`${API_BASE_PATH}/${path}`, { params: { testParam: 'test' } });
      expect(expectedValue).toEqual(actualValue);
    });
  });

  describe('post', () => {
    it('executes a post call without config', async () => {
      http = new HttpClient();
      const path = 'testPath';
      const body = {};
      const expectedValue = Promise.resolve({});
      axios.post.mockImplementation(() => expectedValue);
      const actualValue = http.post(path, body);
      await flushPromises();

      expect(axios.post).toBeCalledWith(`${API_BASE_PATH}/${path}`, body, {});
      expect(expectedValue).toEqual(actualValue);
    });

    it('executes a get call with config', async () => {
      http = new HttpClient();
      const path = 'testPath';
      const body = {};
      const expectedValue = Promise.resolve({});
      axios.post.mockImplementation(() => expectedValue);
      const actualValue = http.post(path, body, { params: { testParam: 'test' } });
      await flushPromises();

      expect(axios.post).toBeCalledWith(`${API_BASE_PATH}/${path}`, body, { params: { testParam: 'test' } });
      expect(expectedValue).toEqual(actualValue);
    });
  });

  describe('put', () => {
    it('executes a post call without config', async () => {
      http = new HttpClient();
      const path = 'testPath';
      const body = {};
      const expectedValue = Promise.resolve({});
      axios.put.mockImplementation(() => expectedValue);
      const actualValue = http.put(path, body);
      await flushPromises();

      expect(axios.put).toBeCalledWith(`${API_BASE_PATH}/${path}`, body, {});
      expect(expectedValue).toEqual(actualValue);
    });

    it('executes a get call with config', async () => {
      http = new HttpClient();
      const path = 'testPath';
      const body = {};
      const expectedValue = Promise.resolve({});
      axios.put.mockImplementation(() => expectedValue);
      const actualValue = http.put(path, body, { params: { testParam: 'test' } });
      await flushPromises();

      expect(axios.put).toBeCalledWith(`${API_BASE_PATH}/${path}`, body, { params: { testParam: 'test' } });
      expect(expectedValue).toEqual(actualValue);
    });
  });
});
