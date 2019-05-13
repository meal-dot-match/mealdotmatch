import React from 'react'
import {Link} from 'react-router-dom'
import Text from './text'
import {Row, Col, Container, Button, Image} from 'react-bootstrap'
import GroceryList from './groceryList'

class SingleRecipe extends React.Component {
  constructor() {
    super()
    this.state = {
      isShowing: false
    }
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit() {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }
  render() {
    console.log('Props on SingleRecipe:', this.props.location)
    const recipe = this.props.location.state
    return (
      <Container className="single-recipe-container">
        <Row>
          <Col xs={4} md={4} lg={4}>
            <img src={recipe.image} />
          </Col>
          <Col xs={8} md={8} lg={8}>
            <Row className="single-recipe-row">
              <h3> {recipe.label} </h3>
            </Row>
            <Row className="single-recipe-row">
              Recipe Url: <a href={recipe.url}> {recipe.url} </a>
            </Row>
            <Row className="single-recipe-row">
              <h5>Ingredients Needed to Cook Recipe</h5>
              <GroceryList recipe={recipe.matchingRecipes[recipe.index]} />
            </Row>
            <Row>
              <Col>
                <Button onClick={this.onSubmit}> Send via Text </Button>
              </Col>
              <Col>
                <Button> Send to Postmates</Button>
              </Col>
            </Row>
            {this.state.isShowing ? (
              <Text missingIngredients={recipe.matchingRecipes[recipe.index]} />
            ) : null}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SingleRecipe
