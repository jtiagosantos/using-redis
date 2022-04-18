import express from 'express';
import { CONSTANTS } from './constants';
import { Mongodb } from './database/mongodb/config';
import { router } from '../src/routes/UserRoutes';

const app = express();
const mongodb = new Mongodb();
const { API: { PORT } } = CONSTANTS;

(async () => {
  await mongodb.connection();

  app.use(express.json());
  app.use('/api/v1/', router);

  app.listen(
    PORT, 
    () => console.log(`Server running on port ${PORT}`)
  );
})();