import express, { Express } from 'express';
import { bodyParser } from '../middlewares/bodyParser';

export const setupApp = async (): Promise<Express> => {
  const app = express();

  app.use(bodyParser);

  return app;
};
