const axios = require('axios')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLSchema,
  GraphQLList
} = require('graphql')

const Ingredient = new GraphQLObjectType({
  name: 'Ingredient',
  fields: () => ({
    text: {type: GraphQLString},
    weight: {type: GraphQLFloat}
  })
})

const Recipe = new GraphQLObjectType({
  name: 'Recipe',
  fields: () => ({
    uri: {type: GraphQLString},
    url: {type: GraphQLString},
    label: {type: GraphQLString},
    image: {type: GraphQLString},
    calories: {type: GraphQLFloat},
    ingredientLines: {type: new GraphQLList(GraphQLString)},
    ingredients: {type: new GraphQLList(Ingredient)}
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    searchRecipes: {
      type: new GraphQLList(Recipe),
      args: {
        food: {type: GraphQLString}
      },
      resolve(parentValue, args) {
        return axios
          .get(
            'https://api.edamam.com/search?q=chicken+tomato&from=0&to=1&app_id=656407a6&app_key=3c0e82b53af12dada5250a7f683e850e'
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
