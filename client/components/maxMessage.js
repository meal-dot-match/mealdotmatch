import React from 'react'

class MaxMessage extends React.Component {
  constructor(props) {
    super()
  }
  // if we this.props.foodType === meat or seafood, then render a heading with an explanation
  // otherwise, render an empty div

  render() {
    if (this.props.foodType === 'meats' || this.props.foodType === 'seafood') {
      return (
        <div>
          <h5>(you may choose a total of 2 meats and seafoods)</h5>
        </div>
      )
    }
    return <h5>(choose up to {this.props.max})</h5>
  }
}

export default MaxMessage
