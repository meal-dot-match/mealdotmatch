import React from 'react'
import {Link} from 'react-router-dom'
import Text from './text'
import {Row, Col, Container, Button, Image, ListGroup} from 'react-bootstrap'
import GroceryList from './groceryList'
import RecipeList from './recipeList'

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
    console.log(recipe)
    return (
      <div className="single-recipe-background">
        <Container>
          <Row className="single-recipe-header">
            <h1> {recipe.label} </h1>
          </Row>
          <Row>
            <Col className="single-recipe-image-container">
              <Row>
                <h4>{recipe.percent} % Match</h4>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <img src={recipe.image} />
              </Row>
              <Row style={{padding: 25}}>
                <Button className="btn-responsive">View Full Recipe</Button>
              </Row>
            </Col>

            <Col className="single-recipe-image-container">
              <Row style={{justifyContent: 'center'}}>
                <h5>Full Ingredient List</h5>
                <RecipeList recipe={recipe.matchingRecipes[recipe.index]} />
              </Row>

              <Row>
                <Col>
                  <Button onClick={this.onSubmit} className="btn-responsive">
                    Send via Text
                  </Button>
                  {this.state.isShowing ? (
                    <Text
                      missingIngredients={
                        recipe.matchingRecipes[recipe.index].missingIngredients
                      }
                      url={recipe.url}
                      name={recipe.label}
                    />
                  ) : null}
                </Col>
                <Col>
                  <Button className="btn-responsive"> Send via Email</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default SingleRecipe
