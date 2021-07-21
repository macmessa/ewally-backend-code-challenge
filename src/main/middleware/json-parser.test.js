const request = require('supertest')
const app = require('../config/app')

describe('JSON Parser Middleware', () => {
  test('should parse body as JSON', async () => {
    app.post('/test_json_parser', (req, res) => {
      res.send(req.body)
    })

    const payload = { name: 'Marco' }
    await request(app)
      .post('/test_json_parser')
      .send(payload)
      .expect(payload)
  })
})
