/* eslint-disable max-statements */
/* eslint-disable complexity */
import React from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap'
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
  sendStringToQuery() {
    let timeString = '&time=1%2B'

    if (this.props.location.state.time === '< 30 mins') {
      timeString = '&time=1-30'
    } else if (this.props.location.state.time === '< 60 mins') {
      timeString = '&time=1-60'
    } else if (this.props.location.state.time === '< 90 mins') {
      timeString = '&time=1-90'
    } else {
      timeString = '&time=1-240'
    }

    const stringQuery =
      this.props.location.state.theMeats
        .concat(this.props.location.state.theSeafood)
        .join('+')
        .replace(/\s/g, '') + timeString
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
          let addedName = []

          for (let i = 0; i < 5; i++) {
            let name = top5[i].name
            for (let j = 0; j < totalRecipesArr.length; j++) {
              if (totalRecipesArr[j].label === name) {
                let obj = {}
                let lowerCasedIngredientsArr = ourIngredientsArr.map(x =>
                  x.toLowerCase()
                )
                const replaceCommas = str => {
                  return str.replace(/,/gi, '')
                }
                let lowerCasedTotalRecipesArr = totalRecipesArr[
                  j
                ].ingredientLines.map(x => x.toLowerCase())

                lowerCasedTotalRecipesArr = lowerCasedTotalRecipesArr.map(x =>
                  replaceCommas(x)
                )

                obj.calories = totalRecipesArr[j].calories
                obj.image = totalRecipesArr[j].image
                obj.url = totalRecipesArr[j].url
                obj.totalTime = totalRecipesArr[j].totalTime
                obj.label = totalRecipesArr[j].label
                obj.percentage = tracker[i].percent

                obj.missingIngredients = totalRecipesArr[
                  j
                ].ingredientLines.filter(function(x) {
                  let split = x.split(' ')
                  return !split.some(
                    y => lowerCasedIngredientsArr.indexOf(y) >= 0
                  )
                })
                if (!addedName.includes(obj.label)) {
                  renderArr.push(obj)
                  addedName.push(obj.label)
                }
              }
            }
          }

          return (
            <div>
              <h1>Your Top 5 Matches:</h1>
              {renderArr.map((x, idx) => (
                <div key={Math.random()}>
                  <img src={x.image} />
                  <h2>{x.label}</h2>
                  <h3>{(Number(x.percentage) * 100).toFixed(2)} % match</h3>
                  <br />

                  <Link
                    to={{
                      pathname: `/recipes/${x.label}`,
                      state: {
                        index: idx,
                        matchingRecipes: renderArr,
                        label: x.label,
                        url: x.url,
                        ingredientlines: x.ingredientLines,
                        image: x.image
                      }
                    }}
                  >
                    <Button type="button">View Recipe</Button>
                  </Link>

                  <br />
                  {/* <button>
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
                  </button> */}
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
