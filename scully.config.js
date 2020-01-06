const {registerPlugin} = require('@scullyio/scully/bin');
const { minifyHtmlPlugin } = require('./plugins/minifyHtmlPlugin');
const { voidPlugin } = require('./plugins/voidPlugin');

registerPlugin('render', 'minifyHtml', minifyHtmlPlugin);
registerPlugin('render', 'void', voidPlugin);

exports.config = {
  projectRoot: "./src/app",
  routes: {
    "/about": {
      "type": "void"
    },
    "/news/:id": {
      "type": "json",
      "id": {
        "url": "http://localhost:4200/assets/news.json",
        "property": "id"
      }
    }
  }
};
