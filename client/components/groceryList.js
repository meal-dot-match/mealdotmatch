import React, {Component} from 'react'
import {ListGroup, Container, Row, Col, Button} from 'react-bootstrap'

class GroceryList extends Component {
  render() {
    return (
      <Container>
        <Row>
          <ListGroup>
            <div>
              <h2>Here are the ingredients you need:</h2>
            </div>

            {this.props.location.state.missingIngredients.map(item => {
              return (
                <ListGroup.Item key={Math.random()}>
                  {item.label}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </Row>
      </Container>
    )
  }
}

export default GroceryList
