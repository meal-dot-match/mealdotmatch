const Sequelize = require('sequelize')
const db = require('../db')

const Question = db.define('question', {
  question: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  },
  name: {
    type: Sequelize.ARRAY(Sequelize.TEXT)
  }
})

module.exports = Question
