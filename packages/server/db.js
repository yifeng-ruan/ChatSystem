var Redis = require('ioredis');
var redis = new Redis({
    port: 6379,          // Redis port
    host: '127.0.0.1',   // Redis host
    family: 4,           // 4 (IPv4) or 6 (IPv6)
    password: 'auth',
    db: 0
  });

const DEL = function(key) {
  redis.del(key);
}

const SET = function(key, value) {
    redis.sadd(key, [value]);
}

const GET = async function(key) {
   return redis.smembers(key);
}

module.exports = {
  SET,
  GET,
  DEL
}

