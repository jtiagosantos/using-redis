import Redis from 'ioredis';
import { CONSTANTS } from '../../constants/index';

const { REDIS: { HOST, PORT } } = CONSTANTS;

export const redisClient = new Redis({
  host: HOST, 
  port: PORT,
});
