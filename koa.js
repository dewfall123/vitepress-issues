const Koa = require('koa');
const StaticServer = require('koa-static-server');
const app = new Koa();

app.use(
  StaticServer({
    rootDir: '.vitepress/dist',
    rootPath: '/vhooks',
  }),
);

app.use(async (ctx) => {
  ctx.redirect('/vhooks');
});

const port = 3001;
app.listen(port);
console.log(`Starting up static-serve
Available on:
  http://127.0.0.1:${port}
`);
