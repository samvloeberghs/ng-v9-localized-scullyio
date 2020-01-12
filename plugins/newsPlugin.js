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
  for (let item of list) {
    handledRoutes.push({
      route: createPath(item.id, item.slug)
    });
  }
  return handledRoutes;
}

newsPlugin[configValidator] = async options => {
  return [];
};

registerPlugin('router', 'news', newsPlugin);
