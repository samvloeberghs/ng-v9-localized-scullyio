require('./plugins/minifyHtmlPlugin');
require('./plugins/voidPlugin');

exports.config = {
  projectRoot: "./src/app",
  routes: {
    "/about": {
      "type": "minifyHtml"
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
