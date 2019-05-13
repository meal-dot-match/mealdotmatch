import React, {Component} from 'react'
import Text from './text'

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
          {chosenRecipe.missingIngredients.map(item => {
            return <div key={Math.random()}>{item}</div>
          })}

          <button type="button" onClick={this.onSubmit}>
            Send via Text
          </button>

          {this.state.isShowing ? <Text /> : null}
        </div>
      )
    }
  }
}

export default GroceryList
