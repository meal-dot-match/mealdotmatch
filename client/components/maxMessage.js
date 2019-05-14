import React from 'react'

class MaxMessage extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    console.log('in Max-----------------------------------------------')
    console.log('what is the alerttttt????????', this.props.alert)
    // console.log('what is the foooooddd????????', this.props.food)
    // console.log('what is the length????????', this.props.length)
    return this.props.foodType === 'meats' ||
      this.props.foodType === 'seafood' ? (
      this.props.alert === true ? (
        <div className="alert alert-warning" role="alert">
          You have already selected the max total of 2 meats and seafoods.
        </div>
      ) : (
        <div>
          <h5> (you may choose a total of 2 meats and seafoods) </h5>
        </div>
      )
    ) : this.props.alert === true ? (
      <div className="alert alert-warning" role="alert">
        You have already selected the max total of {this.props.max}
        {this.props.foodType}
      </div>
    ) : (
      <h5> (choose up to {this.props.max}) </h5>
    )
  }
}

export default MaxMessage
