const request = require('supertest')
const app = require('../config/app')

describe('Content type Middleware', () => {
  test('should return json content-type by default', async () => {
    app.get('/test_content_type', (req, res) => {
      res.send('')
    })

    await request(app)
      .get('/test_content_type')
      .expect('content-type', /json/)
  })

  test('should return xml content-type if set', async () => {
    app.get('/test_content_type_xml', (req, res) => {
      res
        .type('xml')
        .send('')
    })

    await request(app)
      .get('/test_content_type_xml')
      .expect('content-type', /xml/)
  })
})
