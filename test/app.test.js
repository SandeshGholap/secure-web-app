const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('should return Hello Sandesh message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Hello Sandesh! Secure Web App is running 🚀');
  });
});
