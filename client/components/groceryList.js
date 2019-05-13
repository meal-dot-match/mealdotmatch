import React, {Component} from 'react'

class GroceryList extends Component {
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
          {chosenRecipe.missingIngredients.map(item => {
            return <div key={Math.random()}>{item}</div>
          })}
        </div>
      )
    }
  }
}

export default GroceryList
