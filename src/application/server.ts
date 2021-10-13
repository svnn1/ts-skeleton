import { setupApp } from './config/app';

setupApp().then((app) => {
  app.listen(3000, () => console.log('Server running at http://localhost:3000'));
});
