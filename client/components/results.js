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
    console.log('In the sendStrFunc', this.props.location.state)
    const stringQuery = this.props.location.state.theIngredients
      .join('+')
      .replace(/\s/g, '')
    console.log(stringQuery)
    return stringQuery
  }
  render() {
    console.log('the results render props: ', this.props)
    // console.log('the state is: ', this.state)
    const {theIngredients} = this.props.location.state
    console.log('the props passed down are: ', theIngredients)
    const food = this.sendStringToQuery()

    return (
      <Query query={getMealsQuery} variables={{food}}>
        {({loading, error, data}) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          console.log('the data is: ', data)
          return <h1>hello world</h1>
        }}
      </Query>
    )
  }
}

export default graphql(getMealsQuery)(Results)
