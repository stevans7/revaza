const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const target = process.env.TARGET_URL || 'http://example.com';

app.use('/', createProxyMiddleware({
  target,
  changeOrigin: true,
  ws: true,
}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy running on port ${port}`);
});
