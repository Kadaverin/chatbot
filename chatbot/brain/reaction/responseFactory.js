const responseCreatorsByQuestionsTypes = require('../../taskDelegator/responseCreatorsByQuestionTypes')


class responseFactory {
  constructor(responseCreatorsByQuestionsTypes){
    this.router = responseCreatorsByQuestionsTypes
  }
  createResponseFor(question, callback){
    if (! this.router[question.type]) {
      throw new Error('Missing response creators function for question type: ' + question.type)
    }

    this.router[question.type]( ...question.templateWords , (response) => {
      callback(response)
    })
  }
}

module.exports = new responseFactory(responseCreatorsByQuestionsTypes)