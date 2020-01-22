const {registerPlugin, routeSplit, httpGetJson} = require('@scullyio/scully');

const News = 'news';

const newsPlugin = async(route, config) => {
  const {createPath} = routeSplit(route);
  const list = await httpGetJson(config.url);
  const handledRoutes = [];
  for (let item of list) {
    handledRoutes.push({
      route: createPath(item.id, item.slug)
    });
  }
  return handledRoutes;
};

// no validation implemented
const newsPluginValidator =  async () => [];

registerPlugin('router', News, newsPlugin);
exports.News = News;
