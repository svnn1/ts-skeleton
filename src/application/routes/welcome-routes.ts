import { Router } from 'express';
import { WelcomeController } from '../controllers/welcome-controller';

export default (router: Router): void => {
  router.get('/', (req, res) => (new WelcomeController()).handle(req, res));
};
