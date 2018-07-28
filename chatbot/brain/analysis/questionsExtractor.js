const arrayOfQuestionTesters = require('../../constants/questionTesters')

class QuestionsExtractor {
  constructor( questionTesters = [] ){
    this.questionTesters = questionTesters
  }

  getQuestionForBot(msg){
    for(let i = 0; i < this.questionTesters.length; i++ ){
      let matched = msg.match ( this.questionTesters[i].regExp )

      if (matched) return {
        type: this.questionTesters[i].type,
        templateWords: matched.slice(1)
      }
      
    }
    throw new Error( 'Can not recognize question')
  }
}

module.exports = new QuestionsExtractor(arrayOfQuestionTesters)
