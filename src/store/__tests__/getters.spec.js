import getters from '../getters';

describe('getters.js', () => {
  let state;

  describe('themeData', () => {
    beforeEach(() => {
      state = {
        posts: [
          {
            title: {
              rendered: 'Theme Data',
            },
            acf: {
              test: 'test1',
            },
          },
        ],
      };
    });

    it('returns the custom fields from the theme data post', () => {
      const expectedThemeData = {
        test: 'test1',
      };
      const actualThemeData = getters.themeData(state);
      expect(expectedThemeData).toEqual(actualThemeData);
    });

    it('returns null if the theme data post does not exist', () => {
      state.posts = [];
      const expectedThemeData = null;
      const actualThemeData = getters.themeData(state);
      expect(expectedThemeData).toEqual(actualThemeData);
    });
  });
});
