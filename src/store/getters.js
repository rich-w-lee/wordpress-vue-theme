// For global getters
export default {
  themeData (state) {
    const posts = state.posts.filter(p =>
      p.title.rendered.replace(/\s/g, '')
        .toLowerCase() === 'themedata'
    );
    if (posts && posts.length) {
      return posts[0].acf;
    }
    return null;
  },
};
