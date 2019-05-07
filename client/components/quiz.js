import React from 'react'
import {Link} from 'react-router-dom'
import {CuttingBoard} from './Index'
import {QuizQuestions} from './Index'

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
        <QuizQuestions />
        <div>
          {/* can use history? */}
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    )
  }
}

{
  /* <h3>What meal would you like to make?</h3>
<button type="button">Breakfast</button>
<button type="button">Lunch</button>
<button type="button">Dinner</button>
<button type="button">Dessert</button>
<br /> */
}

// const mapStateToProps

// const mapDispatchToProps

// export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
