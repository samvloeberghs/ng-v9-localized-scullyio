const {
  registerPlugin,
  configValidator
} = require('@scullyio/scully/bin');

async function voidPlugin(html, route) {
  return Promise.resolve(html);
}

voidPlugin[configValidator] = async options => {
  return [];
};

registerPlugin('render', 'void', voidPlugin);

module.exports.voidPlugin = voidPlugin;
