const AdvicesRepository = require('../repositories/advicesRepository')

module.exports = {
  getRandomAdvice: (callback) => {
    AdvicesRepository.getRandomAdvice( (err , advice) => {
      callback(err, advice)
    })
  }
}