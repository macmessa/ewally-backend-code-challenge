module.exports = class ValidationError extends Error {
  constructor (validationMessage) {
    super(validationMessage)
    this.name = 'ValidationError'
  }
}
