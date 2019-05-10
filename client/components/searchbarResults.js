import React from 'react'
import {graphql, Query} from 'react-apollo'
import {gql} from 'apollo-boost'
import {Row, Col, Container, Image} from 'react-bootstrap'

const searchBarQuery = gql`
  query($food: String) {
    searchRecipes(food: $food) {
      url
      label
      image
      totalTime
    }
  }
`
class SearchBarResults extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const food = this.props.location.searchBar
    console.log('what are my props??????????', this.props.data)
    return (
      <Query query={searchBarQuery} variables={{food}}>
        {({loading, error, data}) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`

          console.log('what is the dataaaaaaaaaaaaa', data)

          return data.searchRecipes ? (
            <Container>
              <Row>
                {data.searchRecipes.map(recipe => {
                  return (
                    <Col key={Math.random()}>
                      <Image src={recipe.image} />
                      {recipe.label}
                    </Col>
                  )
                })}
              </Row>
            </Container>
          ) : null
        }}
      </Query>
    )
  }
}

export default graphql(searchBarQuery)(SearchBarResults)
