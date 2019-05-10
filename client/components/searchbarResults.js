import React from 'react'
import {graphql, Query} from 'react-apollo'
import {gql} from 'apollo-boost'
import {Row, Col, Container, Image, Button} from 'react-bootstrap'

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

          return data.searchRecipes ? (
            <Container style={{padding: 35}}>
              <Col xs={4} md={4} lg={4}>
                <Row className="results-group">
                  {data.searchRecipes.map(recipe => {
                    return (
                      <Col key={Math.random()}>
                        <Row className="results-background">
                          <a
                            href={recipe.url}
                            rel="noopener"
                            target="_blank"
                            className="results-img-overlay"
                          >
                            <Button
                              variant="outline-info"
                              className="results-button-outline"
                              size="sm"
                            >
                              View Recipe
                            </Button>
                          </a>
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

{
  /* <Row>
                <Col xs={4} md={4} lg={4}>
                  <ListGroup variant="flush">
                    {this.props.ingredients[0]
                      ? this.props.ingredients.map(ingredient => {
                          return (
                            <ListGroup.Item
                              key={Math.random()}
                              className="cutting-board-ingredients"
                            >
                              <Col>{ingredient}</Col>
                              <Col>
                                <Button
                                  type="button"
                                  className="close"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">×</span>
                                </Button>
                              </Col>
                            </ListGroup.Item>
                          )
                        })
                      : null}
                  </ListGroup>
                </Col>
              </Row> */
}
