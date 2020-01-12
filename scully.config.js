const {
  RouteTypes,
} = require('@scullyio/scully');

require('./plugins/minifyHtmlPlugin');
require('./plugins/testPlugin');
require('./plugins/newsPlugin');

// custom plugins in ./plugins/{test, minifyHtml}Plugin.js
const postRenderers = ['test', 'minifyHtml'];

exports.config = {
  projectRoot: './src/app',
  defaultPostRenderers: postRenderers,
  routes: {
    '/news/:id/:slug': {
      type: 'news',   // custom plugin in ./plugins/newsPlugin.js\
      url: 'http://localhost:4200/assets/news.json',
      postRenderers: postRenderers,
    },
    '/blog/:slug': {
      type: RouteTypes.contentFolder,
      postRenderers: postRenderers,
      slug: {
        folder: "./blog"
      }
    },
  }
};
