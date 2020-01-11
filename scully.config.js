require('./plugins/minifyHtmlPlugin');
require('./plugins/testPlugin');

const postRenderers = ['test', 'minifyHtml'];

exports.config = {
  projectRoot: './src/app',
  defaultPostRenderers: postRenderers,
  routes: {
    '/news/:id/:slug': {
      type: 'json',
      postRenderers: postRenderers,
      id: {
        url: 'http://localhost:4200/assets/news.json',
        property: 'id',
      },
      slug: {
        url: 'http://localhost:4200/assets/news/${id}.json',
        property: 'slug',
      },
    },
    '/blog/:slug': {
      type: 'contentFolder',
      postRenderers: postRenderers,
      slug: {
        folder: "./blog"
      }
    },
  }
};
