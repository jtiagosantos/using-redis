import express from 'express';
import { Mongodb } from './database/mongodb/config';
import { CONSTANTS } from './constants';

const app = express();
const mongodb = new Mongodb();
const { API: { PORT } } = CONSTANTS;

(async () => {
  await mongodb.connection();

  app.listen(
    PORT, 
    () => console.log(`Server running on port ${PORT}`)
  );
})();