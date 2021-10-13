import { Express } from 'express';
import request from 'supertest';
import { setupApp } from '../../../../src/application/config/app';

let app: Express;

describe('Body Parse Middleware', () => {
  beforeAll(async () => {
    app = await setupApp();
  });

  test('Should parse body as json', async () => {
    app.post('/test-body-parser', (req, res) => {
      res.send(req.body);
    });

    await request(app)
      .post('/test-body-parser')
      .send({ name: 'Silvano Santana' })
      .expect({ name: 'Silvano Santana' });
  });
});
