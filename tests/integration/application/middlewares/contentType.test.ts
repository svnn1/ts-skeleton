import { Express } from 'express';
import request from 'supertest';
import { setupApp } from '../../../../src/application/config/app';

let app: Express;

describe('CORS Middleware', () => {
  beforeAll(async () => {
    app = await setupApp();
  });

  test('Should return default content type as json', async () => {
    app.get('/test-content-type', (req, res) => {
      res.send('');
    });

    await request(app)
      .get('/test-content-type')
      .expect('content-type', /json/);
  });

  test('Should return xml content type when forced', async () => {
    app.get('/test_content_type_xml', (req, res) => {
      res.type('xml');
      res.send('');
    });

    await request(app)
      .get('/test_content_type_xml')
      .expect('content-type', /xml/);
  });
});
