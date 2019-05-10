import React, {Component} from 'react'
import {ListGroup, Container, Row, Col, Button} from 'react-bootstrap'

class GroceryList extends Component {
  render() {
    console.log(this.props.location)
    return (
      <Container>
        <Row>
          <Col>
            <h2>Here are the ingredients you need:</h2>
            <p>
              {this.props.missingIngredients.map(item => {
                return (
                  <div key={Math.random()}>
                    <div className="container">
                      <div className="centered">
                        {item.label}
                        {/* {item.image} */}
                      </div>
                    </div>
                  </div>
                )
              })}
            </p>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default GroceryList
