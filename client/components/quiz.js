import React from 'react'
import {Link} from 'react-router-dom'
import {CuttingBoard, QuizQuestions} from './index'
import axios from 'axios'
export default class Quiz extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  async componentWillMount() {
    const {data} = await axios.get('/api/questions')
    return data
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
  /*Images - array of images; 
  Names - array of names
  PK - quiz
  <h3>What meal would you like to make?</h3>
<button type="button">Breakfast</button>
<button type="button">Lunch</button>
<button type="button">Dinner</button>
<button type="button">Dessert</button>
<br /> */
}

// const mapStateToProps

// const mapDispatchToProps

// export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
