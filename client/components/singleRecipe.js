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
      isShowing: false
    }
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit() {
    this.setState({
      isShowing: !this.state.isShowing
    })
  }

  // sendEmail(name, email, message) {
  //   try {
  //     const emailToSend = {
  //       name: name,
  //       email: email,
  //       message: message
  //     }
  //     console.log('Inside the sendEmail method', emailToSend)
  //     axios.post('/api/send', emailToSend)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

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
            <Row>
              <Col>
                <Button onClick={this.onSubmit}> Send via Text </Button>
              </Col>
              <Col>
                <Button
                  onClick={() => {
                    this.sendEmail(
                      'Amy',
                      'a.liao.uey@gmail.com',
                      `Carrots and Ranch`
                    )
                  }}
                >
                  Send via Email
                </Button>
              </Col>
            </Row>
            <Row className="single-recipe-row">
              <h5>Total Ingredients List:</h5>
              <RecipeList recipe={recipe.matchingRecipes[recipe.index]} />
            </Row>
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
        </Row>
      </Container>
    )
  }
}

export default SingleRecipe
