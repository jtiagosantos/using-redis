import { redisClient } from '../database/redis/client';
import { promisify } from 'node:util';

const syncRedisGet = promisify(redisClient.get).bind(redisClient);
const syncRedisSet = promisify(redisClient.set).bind(redisClient);

export const cache = {
  get: syncRedisGet,
  set: syncRedisSet,
};
