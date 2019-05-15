import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Text from './text'
import {Button, ListGroup} from 'react-bootstrap'

class RecipeList extends Component {
  render() {
    console.log('Made it into the Recipe List Component!', this.props)
    console.log('missing changing????!', this.props.viewMissing)
    const allIngredients = this.props.recipe.ingredients
    const missingIngredients = this.props.recipe.missingIngredients

    if (!allIngredients) {
      return 'ingredients are no longer here...'
    } else {
      return (
        <ListGroup className="list-group-missing-ingredients">
          {allIngredients.map(item => {
            {
              console.log(
                'this is mny console log',
                missingIngredients.includes(item) && this.props.viewMissing
              )
            }
            return (
              <ListGroup.Item
                key={Math.random()}
                as="li"
                className={
                  missingIngredients.includes(item) && this.props.viewMissing
                    ? 'test-class-yes'
                    : 'test-class'
                }
              >
                {item}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      )
    }
  }
}

export default RecipeList
