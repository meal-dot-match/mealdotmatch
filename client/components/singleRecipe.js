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
      isShowing: false,
      viewMissingIngredients: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.viewMissing = this.viewMissing.bind(this)
  }
  onSubmit() {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  viewMissing() {
    this.setState({
      viewMissingIngredients: !this.state.viewMissingIngredients
    })
  }
  render() {
    // console.log('Props on SingleRecipe:', this.props.location)
    const recipe = this.props.location.state
    console.log('this is my missing ingredients', recipe)
    return (
      <div className="single-recipe-background">
        <Container>
          <Row className="single-recipe-header">
            <h1> {recipe.label} </h1>
          </Row>
          <Row>
            <Col className="single-recipe-image-container">
              <Row>
                <h4>{Math.round(recipe.percent)}% Match</h4>
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

                <RecipeList
                  recipe={recipe.matchingRecipes[recipe.index]}
                  viewMissing={this.state.viewMissingIngredients}
                />
                <p className="single-recipe-missing-ingredients-text">
                  Want to see the ingredients you don't have?
                </p>
                <Button variant="outline-info" onClick={this.viewMissing}>
                  View Missing Ingredients
                </Button>
              </Row>
              {this.state.viewMissingIngredients ? (
                <Row>
                  <Col style={{paddingTop: 15}}>
                    <p className="single-recipe-missing-ingredients-text">
                      Send Missing Ingredients to Your Phone
                    </p>
                    <Button onClick={this.onSubmit} className="btn-responsive">
                      Send via Text
                    </Button>
                    {this.state.isShowing ? (
                      <Text
                        missingIngredients={
                          recipe.matchingRecipes[recipe.index]
                            .missingIngredients
                        }
                        url={recipe.url}
                        name={recipe.label}
                      />
                    ) : null}
                  </Col>
                  <Col style={{paddingTop: 15}}>
                    <p className="single-recipe-missing-ingredients-text">
                      Send Missing Ingredients to Your Email
                    </p>
                    <Button className="btn-responsive"> Send via Email</Button>
                  </Col>
                </Row>
              ) : null}
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default SingleRecipe
