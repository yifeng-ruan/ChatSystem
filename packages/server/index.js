const Koa = require('koa');
const IO = require('koa-socket-2');
 
const app = new Koa();
const io = new IO();
 
io.attach(app);
 
io.on('message', (ctx, data) => {
  ctx.socket.broadcast.emit( 'message', data );
});
 
var bonjour = require('bonjour')()
bonjour.find({ type: 'http' }, function (service) {
  console.log('Found an HTTP server:', service)
})

app.listen( process.env.PORT || 3000 );