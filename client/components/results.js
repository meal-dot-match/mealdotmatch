import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import {graphql, Query} from 'react-apollo'
import {gql} from 'apollo-boost'

const getMealsQuery = gql`
  query($food: String) {
    searchRecipes(food: $food) {
      uri
      url
      label
      image
      calories
      totalTime
      ingredientLines
    }
  }
`

class Results extends React.Component {
  constructor(props) {
    super(props)
  }

  sendStringToQuery() {
    const stringQuery = this.props.location.state.theIngredients
      .join('+')
      .replace(/\s/g, '')
    console.log(stringQuery)
    return stringQuery
  }
  render() {
    const {theIngredients} = this.props.location.state
    const food = this.sendStringToQuery()

    return (
      <Query query={getMealsQuery} variables={{food}}>
        {({loading, error, data}) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          const tracker = []
          const ourIngredientsArr = theIngredients
          const totalRecipesArr = data.searchRecipes

          for (let i = 0; i < totalRecipesArr.length; i++) {
            let recipeIngredientsStr = totalRecipesArr[i].ingredientLines
              .join('')
              .toLowerCase()
            let lowerCasedIngredientsArr = ourIngredientsArr.map(x =>
              x.toLowerCase()
            )
            let filteredIngredients = lowerCasedIngredientsArr.filter(
              ingredient => recipeIngredientsStr.includes(ingredient)
            )
            let percentage =
              filteredIngredients.length /
              totalRecipesArr[i].ingredientLines.length
            console.log(
              'filteredIngredients.length: ',
              filteredIngredients.length
            )
            console.log(
              'totalRecipesArr[i].length',
              totalRecipesArr[i].ingredientLines.length
            )
            console.log('percentage', Number(percentage))
            tracker.push(Number(percentage))
            console.log('tracker: ', tracker)
          }

          return <h1>hello world</h1>
        }}
      </Query>
    )
  }
}

export default graphql(getMealsQuery)(Results)
