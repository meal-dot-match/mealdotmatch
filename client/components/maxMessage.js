import React from 'react'

class MaxMessage extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    if (this.props.alert === true) {
      if (
        this.props.foodType === 'meats' ||
        this.props.foodType === 'seafood'
      ) {
        return (
          <div className="alert alert-warning" role="alert">
            You have already selected the max total of 2 meats and seafoods.
          </div>
        )
      } else {
        return (
          <div className="alert alert-warning" role="alert">
            You have already selected the max total of {this.props.max}{' '}
            {this.props.foodType}
          </div>
        )
      }
    } else if (
      this.props.foodType === 'meats' ||
      this.props.foodType === 'seafood'
    ) {
      return (
        <div>
          <h5>(you may choose a total of 2 meats and seafoods)</h5>
        </div>
      )
    } else {
      return <h5>(choose up to {this.props.max})</h5>
    }
  }
}

export default MaxMessage
