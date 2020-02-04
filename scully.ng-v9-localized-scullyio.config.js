const {RouteTypes} = require('@scullyio/scully');
const {MinifyHtml} = require('scully-minify-html');
const {DisableAngular} = require('scully-disable-angular');

// custom plugins in ./plugins/*.js
const {News} = require('./plugins/newsPlugin');
const {Test} = require('./plugins/testPlugin');

const postRenderers = [DisableAngular, MinifyHtml, Test];

const minifyHtmlOptions = {
  removeComments: false,
};

exports.config = {
  projectRoot: './src',
  defaultPostRenderers: postRenderers,
  minifyHtmlOptions,
  extraRoutes: ['/'],
  routes: {
    '/news/:id/:slug': {
      type: News,
      url: 'http://localhost:4321/assets/news.json'
    },
    '/blog/:slug': {
      type: RouteTypes.contentFolder,
      slug: {
        folder: './blog'
      },
      postRenderers: postRenderers,
      minifyHtmlOptions
    }
  }
};
