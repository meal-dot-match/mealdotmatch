import React from 'react'
import {ListGroup, Container, Row, Col, Button} from 'react-bootstrap'

export default class CuttingBoard extends React.Component {
  constructor() {
    super()
    this.state = []
  }
  removingIngredient(event) {
    console.log('INGREDIENTS ON BOARD', this.props.ingredients)
    console.log(event.target.id)
    const leftOverIngredients = this.props.ingredients.filter(item => {
      return item !== event.target.id
    })
    this.setState({ingredients: [...leftOverIngredients]})
    console.log(this.state)
  }

  render() {
    return (
      <Container>
        <Row className="center-text">
          <h3>Your Ingredients Board</h3>
        </Row>

        <Row>
          <h4>Meal: {this.props.meal}</h4>
        </Row>
        <Row>
          <div className="container-class">
            <Row className="center-text">
              <h5>Ingredients:</h5>
            </Row>
            <Row>
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
                                onClick={() => {
                                  this.removingIngredient(event)
                                }}
                              >
                                <span aria-hidden="true" id={ingredient}>
                                  ×
                                </span>
                              </Button>
                            </Col>
                          </ListGroup.Item>
                        )
                      })
                    : null}
                </ListGroup>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    )
  }
}
