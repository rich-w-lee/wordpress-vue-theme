import flushPromises from 'flush-promises';
import actions from '../actions';
import HttpClient, { mockGet } from '../../utils/HttpClient';

jest.mock('../../utils/HttpClient.js');
describe('actions.js', () => {
  let context;

  describe('getPosts', () => {
    beforeEach(() => {
      context = {
        commit: jest.fn(),
      };
      console.error = jest.fn();
      HttpClient.mockClear();
      mockGet.mockClear();
    });

    it('successfully calls the post API', async () => {
      const response = {};
      mockGet.mockImplementation(() => Promise.resolve({ data: response }));
      actions.getPosts(context);
      await flushPromises();
      expect(mockGet).toBeCalledWith('posts');
      expect(context.commit).toBeCalledWith('updatePosts', response);
    });

    it('fails to call the post API', async () => {
      const error = {};
      mockGet.mockImplementation(() => Promise.reject(error));
      actions.getPosts(context);
      await flushPromises();
      expect(mockGet).toBeCalledWith('posts');
      expect(console.error).toBeCalledWith(error);
    });
  });
});
