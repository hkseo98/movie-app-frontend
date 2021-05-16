const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://movie-app-node-server.herokuapp.com/",
      changeOrigin: true,
    })
  );
};
