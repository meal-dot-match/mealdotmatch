import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Text from './text'
import {Button, ListGroup} from 'react-bootstrap'

class GroceryList extends Component {
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
    console.log('Made it into the Grocery List Component!', this.props)

    const chosenRecipe = this.props.location.recipe

    if (!chosenRecipe) {
      return 'ingredients are no longer here...'
    } else {
      return (
        <div>
          <h3>Missing Ingredients for the {chosenRecipe.label}</h3>
          <img src={chosenRecipe.image} />
          <ListGroup>
            {chosenRecipe.missingIngredients.map(item => {
              return (
                <ListGroup.Item key={Math.random()} as="li">
                  {item}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
          <Button type="button" onClick={this.onSubmit}>
            Send Missing Ingredients as Text
          </Button>
          <Link to="/groceryBag">
            <Button type="button">Use Postmates</Button>
          </Link>
          {this.state.isShowing ? <Text /> : null}
        </div>
      )
    }
  }
}

export default GroceryList
