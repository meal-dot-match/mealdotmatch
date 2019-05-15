import React from 'react'
import {Link} from 'react-router-dom'
import Text from './text'
import {Row, Col, Container, Button, Image, ListGroup} from 'react-bootstrap'
import GroceryList from './groceryList'
import RecipeList from './recipeList'
import Email from './email'
import axios from 'axios'

class SingleRecipe extends React.Component {
  constructor() {
    super()
    this.state = {
      isShowing: false,
      emailShowing: false,
      viewMissingIngredients: false
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.emailSubmit = this.emailSubmit.bind(this)
    this.viewMissing = this.viewMissing.bind(this)
  }
  onSubmit() {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  emailSubmit() {
    this.setState({
      emailShowing: !this.state.emailShowing
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
    // console.log('this is my missing ingredients', recipe)
    // console.log('this is my times', recipe.totalTime)
    return (
      <div className="single-recipe-background">
        <Container>
          <Row className="single-recipe-header">
            <h1> {recipe.label} </h1>
          </Row>
          <Row className="single-recipe-header">
            <p>
              You have{' '}
              <strong className="single-page-highlight-text">
                {Math.round(recipe.percent)}%
              </strong>{' '}
              of the ingredients needed to make this recipe
            </p>
          </Row>

          <Row>
            <Col className="single-recipe-image-container">
              <Row style={{justifyContent: 'center'}}>
                <p>
                  <strong>Ready In: </strong>
                  {recipe.time} minutes (approx. time)
                </p>
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <img src={recipe.image} />
              </Row>

              <Row style={{padding: 25}} className="centered-btn">
                <a href={recipe.url} target="_blank" rel="noreferrer">
                  <Button variant="outline-info">
                    {'View Full Recipe >>'}
                  </Button>
                </a>
              </Row>
              <Row style={{padding: 25}} className="centered-btn">
                <Button variant="outline-info">{'<< Back to Results'}</Button>
              </Row>
            </Col>

            <Col className="single-recipe-image-container">
              <Row style={{justifyContent: 'center'}}>
                <p>
                  <strong>Recipe Ingredient List</strong>
                </p>

                <RecipeList
                  recipe={recipe.matchingRecipes[recipe.index]}
                  viewMissing={this.state.viewMissingIngredients}
                />
              </Row>
              <Row className="single-recipe-missing-ingredients-text">
                <p>Want us to highlight the ingredients you don't have? </p>
              </Row>
              <Row className="single-recipe-missing-ingredients-button">
                <Button variant="outline-info" onClick={this.viewMissing}>
                  Yes, Show Me
                </Button>
              </Row>
              {this.state.viewMissingIngredients ? (
                <Row>
                  <Col style={{paddingTop: 15}}>
                    <p className="single-recipe-missing-ingredients-text">
                      Send Missing Ingredients to Your Phone
                    </p>
                    <Button
                      onClick={this.onSubmit}
                      className="single-recipe-btn"
                    >
                      Text Me
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
                    <Button
                      className="single-recipe-btn"
                      onClick={this.emailSubmit}
                    >
                      Email Me
                    </Button>
                    {this.state.emailShowing ? (
                      <Email
                        missingIngredients={
                          recipe.matchingRecipes[recipe.index]
                            .missingIngredients
                        }
                        image={recipe.image}
                        url={recipe.url}
                        name={recipe.label}
                      />
                    ) : null}
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
