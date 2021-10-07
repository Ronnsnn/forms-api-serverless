const { getAll, get, create, update, destroy } = require('../components/forms/form.handler.js');
const { disconnectToDatabase } = require('../config/db');
const { isApiGatewayResponse } = require('./testUtils')


describe('Testing forms CRUD Api - GET ALL', () => {

  test('it should return an array with getAll', async () => {
    const event = {};
    const context = {};
    const res = await getAll(event, context);

    expect(res).toBeDefined();
    expect(isApiGatewayResponse(res)).toBe(true);
  });
});

describe('Testing forms CRUD Api - GET', () => {
  test('it should return 404 if path does not exist', async () => {
    const event = {
      pathParameters: { path: 'testing' }
    };
    const context = {};
    const res = await get(event, context);

    expect(res).toBeDefined();
    expect(res.statusCode).toBe(404);
  })
});

describe('Testing forms CRUD Api - UPDATE', () => {
  test('it should return 404 if path does not exist', async () => {
    const event = {
      pathParameters: { path: 'testing' },
      body: null
    };
    const context = {};
    const res = await update(event, context);

    expect(res).toBeDefined();
    expect(res.statusCode).toBe(404);
  })
});

describe('Testing forms CRUD Api - DELETE', () => {
  test('it should return 404 if path does not exist', async () => {
    const event = {
      pathParameters: { path: 'testing' },
    };
    const context = {};
    const res = await destroy(event, context);

    expect(res).toBeDefined();
    expect(res.statusCode).toBe(404);
  })
});

afterAll(async () => {
  await disconnectToDatabase();
});