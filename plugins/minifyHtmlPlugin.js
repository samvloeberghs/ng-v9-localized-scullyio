const minify = require('html-minifier').minify;

const minifyOptions = {
  removeComments: true,
  removeCommentsFromCDATA: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  minifyCSS: true,
  // don't remove attribute quotes, not all social media platforms can parse this over-optimization
  removeAttributeQuotes: false,
  // don't remove optional tags, like the head, not all social media platforms can parse this over-optimization
  removeOptionalTags: false,
};

function minifyHtmlPlugin(html, route) {
  const minifiedHtml = minify(html, minifyOptions);
  return Promise.resolve(minifiedHtml);
}

module.exports.minifyHtmlPlugin = minifyHtmlPlugin;
