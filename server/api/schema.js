const axios = require('axios')
const {ApiKey3} = require('../../secrets')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLList
} = require('graphql')

const Recipe = new GraphQLObjectType({
  name: 'Recipe',
  fields: () => ({
    uri: {type: GraphQLString},
    url: {type: GraphQLString},
    label: {type: GraphQLString},
    image: {type: GraphQLString},
    calories: {type: GraphQLFloat},
    totalTime: {type: GraphQLFloat},
    ingredientLines: {type: new GraphQLList(GraphQLString)}
  })
})

const RootQuery = new GraphQLObjectType({
  //searchrecipes(food){ axios.get request http://{food} }
  name: 'RootQueryType',
  fields: {
    searchRecipes: {
      type: new GraphQLList(Recipe),
      args: {
        food: {type: GraphQLString}
      },
      resolve(parentValue, args) {
        console.log('IN THE RESOLVER:', args.food)

        return axios
          .get(
            `https://api.edamam.com/search?q=${args.food}&from=0&to=10&app_id=${
              ApiKey3.ID
            }&app_key=${ApiKey3.KEY}`
          )
          .then(res => res.data)
          .then(data => data.hits.map(recipes => recipes.recipe))
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
