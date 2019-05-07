import React from 'react'
import {Link} from 'react-router-dom'
import {CuttingBoard} from './index'

export default class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {}

  render() {
    return (
      <div>
        <div>
          <CuttingBoard />
        </div>
        <div>
          <h3>What meal would you like to make?</h3>
          <button type="button">Breakfast</button>
          <button type="button">Lunch</button>
          <button type="button">Dinner</button>
          <button type="button">Dessert</button>
          <br />
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    )
  }
}

// const mapStateToProps

// const mapDispatchToProps

// export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
