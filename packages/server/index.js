const Koa = require('koa');
const IO = require('koa-socket-2');
var Router = require('koa-router');

const app = new Koa();
const io = new IO();
var router = new Router();
var redis = require("./db")

io.attach(app);
 
io.on('message', (ctx, data) => {
  ctx.socket.broadcast.emit( 'message', data );
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen( process.env.PORT || 3000, () => {
      setInterval(() => {
        redis.DEL("available");
        var bonjour = require('bonjour')()
        bonjour.find({ type: 'http' }, function(service) {
          if (service.name.includes("Client")) {
              redis.SET("available", service.name);
          }
        });
      }, 5000)
  });

router.get('/available', async (ctx, next) => {
  var services = await redis.GET("available");
  let result = "<ul>";
  services.forEach(service => {
    result += "<li>" + service + "</li>";
  });
  result += "</ul>";
  ctx.body = result;
});
