const router = require('express').Router()
const fg = require('fast-glob')

module.exports = app => {
  app.use('/', router)
  fg.sync('**/src/main/routes/**routes.js', { objectMode: true }).forEach(file => {
    require(`../routes/${file.name}`)(router)
  })
}
