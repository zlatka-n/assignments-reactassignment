const jsonServer = require("json-server");
const rateLimit = require('express-rate-limit')

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === "POST") {
    req.body.createdAt = Date.now();
  }
  next();
});

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 500, // limit each IP to 500 requests per windowMs
});

server.use(limiter);

// Use default router
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});
