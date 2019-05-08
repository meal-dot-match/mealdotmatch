import React from 'react'
import {Link} from 'react-router-dom'
import {CuttingBoard} from './index'
import axios from 'axios'

export default class Quiz extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      ingredients: [],
      data: [],
      meal: ''
    }
    this.increaseCount = this.increaseCount.bind(this)
    this.addToIngredients = this.addToIngredients.bind(this)
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/questions')
    this.setState({data: data})
  }

  addToIngredients(event) {
    if (this.state.count === 0) {
      this.setState({
        meal: event.target.alt
      })
    } else {
      this.setState({
        ingredients: [...this.state.ingredients, event.target.alt]
      })
    }
  }

  increaseCount() {
    let newCount = this.state.count + 1
    this.setState({count: newCount})
  }

  decreaseCount() {
    let newCount = this.state.count - 1
    this.setState({count: newCount})
  }

  render() {
    const questions = this.state.data[this.state.count]
    console.log('what is my state??????', this.state)
    return this.state.data[0] ? (
      <div className="row">
        <div className="column">
          <CuttingBoard
            ingredients={this.state.ingredients}
            meal={this.state.meal}
          />
        </div>
        <div className="column">
          <h2>{questions.question}</h2>
          {questions.image.map((picture, index) => {
            return (
              <div key={Math.random()}>
                <button
                  type="button"
                  className="button"
                  onClick={() => this.addToIngredients(event)}
                >
                  <div className="container">
                    <div className="centered">{questions.name[index]}</div>
                    <img
                      className="options"
                      src={picture}
                      alt={questions.name[index]}
                    />
                  </div>
                </button>
              </div>
            )
          })}

          <div>
            {this.state.count > 0 ? (
              <button type="button" onClick={() => this.decreaseCount()}>
                Previous
              </button>
            ) : null}
            {this.state.count === this.state.data.length - 1 ? (
              <button type="button">Get Matches</button>
            ) : (
              <button type="button" onClick={() => this.increaseCount()}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    ) : (
      'Loading'
    )
  }
}
