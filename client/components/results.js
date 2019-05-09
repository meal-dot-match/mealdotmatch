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
    // this.state = {
    //   ingredients: [],
    //   meal: ''
    // }
  }

  sendStringToQuery() {
    console.log('In the sendStrFunc', this.state.ingredients)
    const stringQuery = this.state.ingredients.join('+').replace(/\s/g, '')
    console.log(stringQuery)
    return stringQuery
  }

  render() {
    console.log('the results render props: ', this.props)
    // console.log('the state is: ', this.state)
    const {theIngredients} = this.props.location.state
    console.log('the props passed down are: ', theIngredients)

    return (
      <Query query={getMealsQuery} variables={{food}}>
        {({loading, error, data}) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          return <h1>hello world</h1>
        }}
      </Query>
    )

    //map through all recipes we get for % match
    //sort by highest % match
    //render top 5 matches
    // <div>
    //   <h1>The recipe name here</h1>
    //   <a href="https://www.marthastewart.com/312659/rosemary-lemon-chicken-with-vegetables">
    //     Click here to see more about the recipe
    //   </a>
    //   <br />
    //   <br />
    //   <img src="https://assets.marthastewart.com/styles/wmax-300/d24/ed102471_1106_rosemary_s/ed102471_1106_rosemary_s_vert.jpg?itok=JAnvQ5Ni" />
    //   <h2>Calorie count: 1000</h2>
    //   <h2>
    //     Your % Match: (the length of the new array when we use arr.filter on
    //     the ingredients the user input from props that match the
    //     ingredientLines array by str.includes function) / (the ingredientLines
    //     length){' '}
    //   </h2>
    //   <h3>
    //     Your missing ingredients: filter the ingredientLines array by if our
    //     user input array from props does NOT str.includes and will eventually
    //     send text or to postmates API
    //   </h3>
    // </div>
    // )
  }
}

// export default graphql(getMealsQuery)(Results)
export default Results
