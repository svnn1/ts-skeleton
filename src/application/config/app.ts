import express, { Express } from 'express';
import setupRoutes from './routes';
import setupSwagger from './swagger';
import { bodyParser } from '../middlewares/bodyParser';
import { contentType } from '../middlewares/contentType';
import { cors } from '../middlewares/cors';

export const setupApp = async (): Promise<Express> => {
  const app = express();

  setupSwagger(app);
  app.use(bodyParser);
  app.use(cors);
  app.use(contentType);

  setupRoutes(app);

  return app;
};
