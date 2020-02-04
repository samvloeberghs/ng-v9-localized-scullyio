const {MinifyHtml} = require('scully-minify-html');
const {DisableAngular} = require('scully-disable-angular');

const postRenderers = [DisableAngular, MinifyHtml];

exports.config = {
  projectRoot: './src',
  defaultPostRenderers: postRenderers,
  routes: {
    '/news/:id/:slug': {
      type: News,
      url: 'http://localhost:4321/assets/news.json'
    }
  }
};
