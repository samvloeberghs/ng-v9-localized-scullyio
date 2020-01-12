const {
  registerPlugin,
  configValidator,
  routeSplit
} = require('@scullyio/scully');

const {
  httpGetJson
} = require('@scullyio/scully/utils/httpGetJson');


async function newsPlugin(route, config) {
  const {createPath} = routeSplit(route);
  const list = await httpGetJson(config.url);
  const handledRoutes = [];
  for (item of list) {
    const route = createPath(item.id, item.slug);
    handledRoutes.push({route});
  }
  return handledRoutes;
}

newsPlugin[configValidator] = async options => {
  return [];
};

registerPlugin('router', 'news', newsPlugin);
