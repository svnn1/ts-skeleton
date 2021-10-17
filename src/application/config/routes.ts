import { Express, Router } from 'express';
import welcomeRoutes from '../routes/welcomeRoutes';

export default (app: Express): void => {
  const router = Router();

  app.use(router);

  welcomeRoutes(router);
};
