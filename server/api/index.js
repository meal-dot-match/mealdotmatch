const router = require('express').Router()
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
module.exports = router

const schema = buildSchema(`
  type Query {
    url: String,
    label: String, 
    image: String,
    ingredients: String
  }
`);

const root = {
  getRecipes: async (arrayOfIngredients) => {
    await fetch('https://api.edamam.com/search?app_id=20c61bd6&app_key=0658e7c199304f1b0b9c869e76e4548d&q=chicken+tomato+salt+lemon+mushrooms&from=0&to=10&ingr=5')
  },
};

router.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
// router.use('/users', require('./users'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
