exports.config = {
  projectRoot: "./src/app",
  routes: {
    "/news/:id": {
      "type": "json",
      "id": {
        "url": "http://localhost:4200/assets/news.json",
        "property": "id"
      }
    }
  }
};
