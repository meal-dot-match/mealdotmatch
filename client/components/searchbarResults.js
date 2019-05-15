import React from 'react'
import {graphql, Query} from 'react-apollo'
import {gql} from 'apollo-boost'
import {Row, Col, Container, Image, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

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
    // console.log('What are the props in searchBar', this.props)
    const food = this.props.location.searchBar
    return (
      <Query query={searchBarQuery} variables={{food}}>
        {({loading, error, data}) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`

          return data.searchRecipes ? (
            <Container style={{padding: 35}}>
              <Col xs={4} md={4} lg={4}>
                <Row className="results-group">
                  {data.searchRecipes.map((recipe, index) => {
                    return (
                      <Col key={Math.random()}>
                        <Row className="results-background">
                          <Link
                            to={{
                              pathname: '/recipes',
                              url: recipe.url,
                              image: recipe.image,
                              label: recipe.label,
                              totalTime: recipe.totalTime
                            }}
                            className="results-img-overlay"
                          >
                            <Button
                              variant="outline-info"
                              className="results-button-outline"
                              size="sm"
                            >
                              View Recipe
                            </Button>
                          </Link>
                          <Image src={recipe.image} className="results-image" />
                        </Row>
                        <Row> {recipe.label} </Row>
                      </Col>
                    )
                  })}
                </Row>
              </Col>
            </Container>
          ) : null
        }}
      </Query>
    )
  }
}

export default graphql(searchBarQuery)(SearchBarResults)
