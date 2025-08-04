import request from 'supertest';
import app from '../../src/app.js';
import { getNotifications, clear } from '../../src/memory/storage';
import { server } from '../../src/app.js';

beforeEach(clear)

afterAll((done) => {
  server.close(done)
})

test('POST /notifications', async() => {
  const response = await request(app)
    .post('/api/v1/notifications')
    .send({
      Type: 'Warning',
      Name: 'Warning 1',
      Description: 'This is a severe warning'
    })
  
  expect(response.status).toBe(200)
  expect(getNotifications().length).toBe(1)
})

test('Returns 400 when required fields are missing', async()=>{
  const response = await request(app)
    .post('/api/v1/notifications')
    .send({
      Name: "Info1",
      Description: "This is an Info"
    })
  
  expect(response.status).toBe(400)
})

test('Returns 400 when invalid types are present', async()=>{
  const response = await request(app)
    .post('/api/v1/notifications')
    .send({
      Type: "ABC",
      Name: "ABC1",
      Description: "This is an ABC"
    })
  
  expect(response.status).toBe(400)
})



