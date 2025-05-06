function routes(app) {
  app.use('/users', require('./UserRoutes'));
}
module.exports = routes;
