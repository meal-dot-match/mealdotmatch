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

            let newObj = {}

            newObj.name = totalRecipesArr[i].label
            newObj.percent = Number(percentage)

            tracker.push(newObj)

            tracker.sort(function(a, b) {
              return b.percent - a.percent
            })
          }
          const top5 = tracker.slice(0, 5)
          const renderArr = []

          for (let i = 0; i < top5.length; i++) {
            let name = tracker[i].name
            for (let j = 0; j < totalRecipesArr.length; j++) {
              if (totalRecipesArr[j].label === name) {
                let obj = {}
                obj.calories = totalRecipesArr[j].calories
                obj.image = totalRecipesArr[j].image
                obj.url = totalRecipesArr[j].url
                obj.totalTime = totalRecipesArr[j].totalTime
                obj.label = totalRecipesArr[j].label
                obj.percentage = tracker[i].percent
                renderArr.push(obj)
              }
            }
          }

          return (
            <div>
              <h1>Your Top 5 Matches:</h1>
              {renderArr.map(x => (
                <div>
                  <h1>{x.label}</h1>
                  <h1>{x.calories}</h1>
                  <h1>{x.totalTime}</h1>
                  <h1>{x.percentage}</h1>
                  <br />
                </div>
              ))}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default graphql(getMealsQuery)(Results)
