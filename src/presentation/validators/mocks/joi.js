const schemaValidator = parent => ({
  validate: payload => {
    parent.schema = payload
    return {
      error: parent.errors,
      value: payload
    }
  }
})

module.exports = {
  schema: {},
  errors: '',
  object () {
    return schemaValidator(this)
  },
  number () {
    return this
  },
  string () {
    return this
  },
  required () {
    return this
  },
  custom () {
    return this
  }
}
