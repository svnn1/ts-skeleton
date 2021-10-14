import { Express, Router } from 'express';
import welcomeRoutes from '../routes/welcome-routes';

export default (app: Express): void => {
  const router = Router();

  app.use(router);

  welcomeRoutes(router);
};
