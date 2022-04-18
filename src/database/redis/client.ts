import Redis from 'ioredis';

export const redisClient = new Redis({
  host:'redis-server', 
  port: 6379
});
