// тут основной класс

const questionsExtractor = require('./brain/analysis/questionsExtractor')
const responseFactory = require('./brain/reaction/responseFactory')


class Chatbot {
  constructor(questionsExtractor , responseFactory){
    this.questionsExtractor = questionsExtractor
    this.responseFactory = responseFactory
  }
  answerOn(msg , callback){
    let question
    try {
      question = this.questionsExtractor.getQuestionForBot(msg);  
    } catch (e) {
      return callback(e.message)
    }

    this.responseFactory.createResponseFor(question , (response) => {
      callback(response)
    })
  }
}

module.exports = new Chatbot(questionsExtractor, responseFactory)
