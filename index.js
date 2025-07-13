import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "https://www.hellomagazine.com",
    changeOrigin: true,
    secure: true,
    prependPath: true, // default: true (keeps path intact)
    ignorePath: false,
    hostnameRewrite: {}, // no host header rewrite
    autoRewrite: true, // rewrite location headers in redirects
    cookieDomainRewrite: "*", // strip domain from cookies
  }),
);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Proxy live on port ${port}`));
