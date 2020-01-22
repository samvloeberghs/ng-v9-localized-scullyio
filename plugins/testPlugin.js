const {registerPlugin} = require('@scullyio/scully');
const {scullyConfig} = require('@scullyio/scully/utils/config');

const Test = 'test';

const testPlugin = async (html, handledRoute) => {
  //console.log(handledRoute, scullyConfig);
  return Promise.resolve(html);
};

// no validation implemented
const testPluginValidator = async () => [];

registerPlugin('render', Test, testPlugin);
exports.Test = Test;
