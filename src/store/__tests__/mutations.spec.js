import mutations from '../mutations';

describe('mutations.js', () => {
  let state;

  describe('updatePosts', () => {
    beforeEach(() => {
      state = {
        posts: [],
      };
    });

    it('updates state.posts', () => {
      const newPosts = [{ test: 'test' }];
      const expectedState = {
        posts: newPosts,
      };
      mutations.updatePosts(state, newPosts);
      expect(expectedState).toEqual(state);
    });
  });
});
