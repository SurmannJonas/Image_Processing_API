import request from 'supertest';
import routes from "../routes/index";


//it("expects routes return API response", () => {
//  expect(routes.toEqual('Main API Route');
//});


describe('Endpoint Test', () => {
  it('should return the expected response', async () => {
    const response = await request(routes).get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Main API Route');
  });
});
