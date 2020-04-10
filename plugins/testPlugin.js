const {registerPlugin} = require('@scullyio/scully');

const Test = 'test';

const testPlugin = async (html, handledRoute) => {
  //console.log(handledRoute, scullyConfig);
  return Promise.resolve(html);
};

// no validation implemented
const testPluginValidator = async () => [];

registerPlugin('render', Test, testPlugin);
exports.Test = Test;
