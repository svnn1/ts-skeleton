import express, { Express } from 'express';
import { bodyParser } from '../middlewares/bodyParser';
import { contentType } from '../middlewares/contentType';
import { cors } from '../middlewares/cors';

export const setupApp = async (): Promise<Express> => {
  const app = express();

  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);

  return app;
};
