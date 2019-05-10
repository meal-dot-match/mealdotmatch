import React from 'react'

class SingleRecipe extends React.Component {
  render() {
    console.log('WHAT ARE MY PROPS?????', this.props.location)
    return <div>Hello, this will be the recipe</div>
  }
}

export default SingleRecipe
