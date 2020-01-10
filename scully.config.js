require('./plugins/minifyHtmlPlugin');
require('./plugins/testPlugin');

exports.config = {
  projectRoot: './src/app',
  routes: {
    /*
    '/': {
      type: 'default',
      postRenderers: ['test' , 'minifyHtml'],
    },
    '/about': {
      type: 'default',
      postRenderers: ['test' , 'minifyHtml'],
    },
    '/not-found': {
      type: 'default',
      postRenderers: ['test' , 'minifyHtml'],
    },
     */
    '/news/:id/:slug': {
      type: 'json',
      postRenderers: ['minifyHtml'],
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
      postRenderers: ['test', 'minifyHtml'],
      slug: {
        folder: "./blog"
      }
    },
  }
};
