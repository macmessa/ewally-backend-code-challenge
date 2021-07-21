module.exports = class RecordAlreadyExistsError extends Error {
  constructor (recordAlreadyExistsMessage) {
    super(recordAlreadyExistsMessage)
    this.name = 'RecordAlreadyExistsError'
  }
}
