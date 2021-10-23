import 'dotenv/config';

import { setupApp } from './config/app';
import { PORT } from './config/env';

setupApp().then((app) => {
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
});
