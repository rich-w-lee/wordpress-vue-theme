// For global getters
export default {
  themeData(state) {
    const posts = state.posts;
    if (posts && posts.length) {
      return posts[0].acf;
    }
    return null;
  }
};
