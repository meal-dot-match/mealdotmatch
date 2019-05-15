import React from 'react'
import {Link} from 'react-router-dom'
import Text from './text'
import {Row, Col, Container, Button, Image} from 'react-bootstrap'
import GroceryList from './groceryList'
import RecipeList from './recipeList'
import Email from './email'
import axios from 'axios'

class SingleRecipe extends React.Component {
  constructor() {
    super()
    this.state = {
      isShowing: false,
      emailShowing: false
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.emailSubmit = this.emailSubmit.bind(this)
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

  render() {
    const recipe = this.props.location.state
    // console.log('Logging "recipe" in SingleRecipe', recipe)
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
              <h5>Ingredients Still Needed to Cook Recipe:</h5>
              <GroceryList recipe={recipe.matchingRecipes[recipe.index]} />
            </Row>
            <Row className="single-recipe-row">
              <h5>Total Ingredients List:</h5>
              <RecipeList recipe={recipe.matchingRecipes[recipe.index]} />
            </Row>
            <Row>
              <Col>
                <Button onClick={this.onSubmit}> Send via Text </Button>
              </Col>
              {this.state.isShowing ? (
                <Text
                  missingIngredients={
                    recipe.matchingRecipes[recipe.index].missingIngredients
                  }
                  url={recipe.url}
                  name={recipe.label}
                />
              ) : null}

              <Button onClick={this.emailSubmit}> Send via Email </Button>
              {this.state.emailShowing ? <Email /> : null}
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default SingleRecipe
