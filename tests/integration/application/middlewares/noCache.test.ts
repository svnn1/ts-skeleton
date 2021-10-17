import { Express } from 'express';
import request from 'supertest';
import { setupApp } from '../../../../src/application/config/app';
import { noCache } from '../../../../src/application/middlewares/noCache';

let app: Express;

describe('NoCache Middleware', () => {
  beforeAll(async () => {
    app = await setupApp();
  });

  test('Should disable cache', async () => {
    app.get('/test-no-cache', noCache, (req, res) => {
      res.send();
    });

    await request(app)
      .get('/test-no-cache')
      .expect('cache-control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
      .expect('pragma', 'no-cache')
      .expect('expires', '0')
      .expect('surrogate-control', 'no-store');
  });
});
