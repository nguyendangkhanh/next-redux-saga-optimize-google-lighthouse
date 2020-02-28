const nextRoutes = require('next-routes');
const _ = require('lodash');
const siteConfig = require('../config');
const routes = (module.exports = nextRoutes());

Object.values(siteConfig['urlWebsiteDefine']).forEach(ite =>
  _.forEach(ite, l => {
    routes.add(l);
  }),
);
