const supertest = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');

beforeEach(async () => {
  // re-run the seeds and start with a fresh database for each test
  await db.seed.run();
});

// to remove the weird yellow error in testing console
// afterAll(async () => {
//     await db.destroy();
//   });

describe('server', function () {
  it('runs the tests', function () {
    expect(true).toBe(true);
  });
});

describe('POST /', function () {
  it('should create a car', async () => {
    const res = await supertest(server).post('/cars').send({ name: 'new-car' });
    // console.log(res);
    expect(res.type).toMatch(/json/i);
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('new-car');
    expect(res.body.id).toBeDefined();
  });
});

describe('DEL /', function () {
  it('should delete a car', async () => {
    const res = await (await supertest(server).delete('/cars/:id'));
    expect(res.statusCode).toBe(200);
    expect(res.type).toMatch(/json/i)
  });
});
