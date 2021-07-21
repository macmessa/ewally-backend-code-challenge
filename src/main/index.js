const app = require('./config/app')
const logger = require('../utils/loggers')

(async () => {
  app
    .listen(port)
    .on('listening', () => logger.info(`✅ API started at: http://localhost:${port}`))
    .on('error', error => {
      logger.error(`❌ ${error}`)
      process.exit(0)
    })
})().catch(logger.error)
