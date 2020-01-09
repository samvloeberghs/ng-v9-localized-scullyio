const {
  registerPlugin,
  configValidator
} = require('@scullyio/scully');

async function testPlugin(html, route) {
  console.log('route tested', route);
  return Promise.resolve(html);
}

testPlugin[configValidator] = async options => {
  return [];
};

registerPlugin('render', 'test', testPlugin);

module.exports.testPlugin = testPlugin;
