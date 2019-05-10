/* eslint-disable max-statements */
/* eslint-disable complexity */
import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import {graphql, Query} from 'react-apollo'
import {gql} from 'apollo-boost'
import {Link} from 'react-router-dom'

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
    // const stringQuery = this.props.location.state.theIngredients
    const stringQuery = this.props.location.state.theMeats
      .concat(this.props.location.state.theSeafood)
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

            let filteredObj = {}
            filteredObj.name = totalRecipesArr[i].label
            filteredObj.percent = Number(percentage)

            tracker.push(filteredObj)
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
                let lowerCasedIngredientsArr = ourIngredientsArr.map(x =>
                  x.toLowerCase()
                )
                const replaceCommas = str => {
                  return str.replace(/,/gi, '')
                }
                lowerCasedIngredientsArr = lowerCasedIngredientsArr.map(x =>
                  replaceCommas(x)
                )
                console.log('lowerCased: ', lowerCasedIngredientsArr)
                obj.calories = totalRecipesArr[j].calories
                obj.image = totalRecipesArr[j].image
                obj.url = totalRecipesArr[j].url
                obj.totalTime = totalRecipesArr[j].totalTime
                obj.label = totalRecipesArr[j].label
                obj.percentage = tracker[i].percent
                console.log(
                  'totalRecipesArr[j].ingredientLines',
                  totalRecipesArr[j].ingredientLines
                )
                obj.missingIngredients = totalRecipesArr[
                  j
                ].ingredientLines.filter(function(x) {
                  let split = x.split(' ')
                  return !split.some(
                    y => lowerCasedIngredientsArr.indexOf(y) >= 0
                  )
                })
                renderArr.push(obj)
              }
            }
          }

          return (
            <div>
              <h1>Your Top 5 Matches:</h1>
              {console.log('render array', renderArr)}
              {console.log('total recipes arr', totalRecipesArr)}
              {console.log('our ingredients array', ourIngredientsArr)}
              {renderArr.map(x => (
                <div key={Math.random()}>
                  <h2>{x.label}</h2>
                  <h3>{(Number(x.percentage) * 100).toFixed(2)} % match</h3>
                  <br />
                  <Link
                    to={{
                      pathname: `/recipes/${x.label}`,
                      state: {
                        missingIngredients: renderArr
                      }
                    }}
                  >
                    View Recipe
                  </Link>

                  <button>
                    <Link
                      to={{
                        pathname: '/grocerylist',
                        state: {
                          missingIngredients: renderArr
                        }
                      }}
                    >
                      View Grocery List
                    </Link>
                  </button>
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
