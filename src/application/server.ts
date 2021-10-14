/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config({
  path: '.env',
});

import { setupApp } from './config/app';
import { PORT } from './config/env';

setupApp().then((app) => {
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
});
