require('./plugins/minifyHtmlPlugin');
require('./plugins/testPlugin');

exports.config = {
  projectRoot: './src/app',
  routes: {
    /*
    '/about': {
      type: 'void',
      postRenderers: ['test'],
    },
     */
    '/news/:id/:slug': {
      type: 'json',
      id: {
        'url': 'http://localhost:4200/assets/news.json',
        'property': 'id'
      },
      slug: {
        'url': 'http://localhost:4200/assets/news/${id}.json',
        'property': 'slug'
      }
    },
  }
};
