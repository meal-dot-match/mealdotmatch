import React from 'react'
import {Link} from 'react-router-dom'

export default class CuttingBoard extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick() {}

  render() {
    return (
      <div>
        <h3>Your Cutting Board:</h3>
        <h4>Meal:</h4>
        <h4>Ingredients:</h4>
        {/* Pass quiz responses in as props. map over ingredients, rendering each with an 'x' to remove it. Each time a button is clicked on the quiz, re-render this component with new info.*/}
      </div>
    )
  }
}

// const mapStateToProps

// const mapDispatchToProps

// export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
