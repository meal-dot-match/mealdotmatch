import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Text from './text'
import {Button, ListGroup} from 'react-bootstrap'

class RecipeList extends Component {
  render() {
    // console.log('Made it into the Recipe List Component!', this.props)

    const allIngredients = this.props.recipe.ingredients

    if (!allIngredients) {
      return 'ingredients are no longer here...'
    } else {
      return (
        <div>
          <ListGroup>
            {allIngredients.map(item => {
              return (
                <ListGroup.Item key={Math.random()} as="li">
                  {item}
                </ListGroup.Item>
              )
            })}
          </ListGroup>
        </div>
      )
    }
  }
}

export default RecipeList
