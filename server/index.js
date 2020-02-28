const express = require('express');
const next = require('next');
const path = require('path');

const port = parseInt(process.env.PORT, 10) || 8599;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const siteConfig = require('../config');
const LRUCache = require('lru-cache');
const _ = require('lodash');
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60, // 1hour
});

app.prepare().then(() => {
  const server = express();
  Object.values(siteConfig['urlWebsiteDefine']).forEach(ite => {
    server.get(
      _.map(ite, l => l['pattern']),
      (req, res) => {
        let flag = _.find(ite, { slug: true });
        if (flag) {
          return app.render(req, res, `/${ite[0]['page']}`, { slug: req.params.slug });
        } else {
          return app.render(req, res, `/${ite[0]['page']}`);
        }
      },
    );
  });
  if (!dev) {
    server.get('/service-worker.js', (req, res) => {
      app.serveStatic(req, res, path.resolve('./public/static/service-worker.js'));
    });

    server.get('/robots.txt', (req, res) => {
      app.serveStatic(req, res, path.resolve('./public/static/robots.txt'));
    });
  }
  server.all('*', (req, res) => {
    return handle(req, res);
  });
  server.get('/', (req, res) => {
    renderAndCache(req, res, '/', {});
  });
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
function getCacheKey(req) {
  return req.url;
}

async function renderAndCache(req, res, pagePath, queryParams) {
  const key = getCacheKey(req);
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    return;
  }
  try {
    const html = await app.renderToHTML(req, res, pagePath, queryParams);
    if (dev || res.statusCode !== 200) {
      res.setHeader('x-cache', 'SKIP');
      res.send(html);
      return;
    }
    ssrCache.set(key, html);
    res.setHeader('x-cache', 'MISS');
    res.send(html);
  } catch (err) {
    app.renderError(err, req, res, pagePath, queryParams);
  }
}
