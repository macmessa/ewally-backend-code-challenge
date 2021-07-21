const { cors, jsonParser, contentType } = require('../middleware')

module.exports = app => {
  app
    .disable('x-powered-by')
    .use(cors)
    .use(jsonParser)
    .use(contentType)
}
