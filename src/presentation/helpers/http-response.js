const { ServerError } = require('../../utils/errors')
module.exports = class HttpResponse {
  static ok (body) {
    return {
      statusCode: 200,
      body
    }
  }

  static created (body) {
    return {
      statusCode: 201,
      body
    }
  }

  static badRequest (error) {
    return {
      statusCode: 400,
      body: error.message
    }
  }

  static notFound (error) {
    return {
      statusCode: 404,
      body: error.message
    }
  }

  static conflict (error) {
    return {
      statusCode: 409,
      body: error.message
    }
  }

  static internalServerError () {
    return {
      statusCode: 500,
      body: new ServerError().message
    }
  }
}
