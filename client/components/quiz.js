import React from 'react'
import {CuttingBoard, MaxMessage} from './index'
import axios from 'axios'
import {ListGroup, Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Quiz extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      meal: '',
      meats: [],
      seafood: [],
      dairy: [],
      'vegetable(s)': [],
      'fruit(s)': [],
      'grain(s)': [],
      ingredients: [],
      data: []
    }
    this.removeIngredient = this.removeIngredient.bind(this)
    this.increaseCount = this.increaseCount.bind(this)
    this.decreaseCount = this.decreaseCount.bind(this)
    this.addToIngredients = this.addToIngredients.bind(this)
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/questions')
    this.setState({data: data})
  }

  addToIngredients(event) {
    const max = this.state.data[this.state.count].max
    const foodType = this.state.data[this.state.count].question.split(' ')[1]
    if (this.state.count === 0) {
      this.setState({
        meal: event.target.alt
      })
    } else {
      if (
        !this.state.ingredients.includes(event.target.alt) &&
        this.state[foodType].length < max
      ) {
        if (foodType === 'meats' || foodType === 'seafood') {
          if (this.state.meats.length + this.state.seafood.length < 2) {
            this.setState({
              ingredients: [...this.state.ingredients, event.target.alt],
              [foodType]: [...this.state[foodType], event.target.alt]
            })
          }
        } else {
          this.setState({
            ingredients: [...this.state.ingredients, event.target.alt],
            [foodType]: [...this.state[foodType], event.target.alt]
          })
        }
      }
    }
  }

  removeIngredient(event) {
    const ingredientsLeft = this.state.ingredients.filter(item => {
      return item !== event.target.id
    })
    const foodType = this.state.data[this.state.count].question.split(' ')[1]
    const foodTypeIngredientsLeft = this.state[foodType].filter(item => {
      return item !== event.target.id
    })
    this.setState({
      ingredients: ingredientsLeft,
      [foodType]: foodTypeIngredientsLeft
    })
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

    return this.state.data[0] ? (
      <Container>
        <Row>
          <Col>
            <h2 className="question">{questions.question}</h2>
            <MaxMessage
              max={this.state.data[this.state.count].max}
              foodType={
                this.state.data[this.state.count].question.split(' ')[1]
              }
            />
            <Row>
              {questions.image.map((picture, index) => {
                return (
                  <div key={Math.random()}>
                    <button
                      type="button"
                      className="button"
                      onClick={() => this.addToIngredients(event)}
                    >
                      <div className="option-with-label">
                        <div className="label">{questions.name[index]}</div>
                        <div>
                          <img
                            className="options"
                            src={picture}
                            alt={questions.name[index]}
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                )
              })}
            </Row>

            <Row className="prev-next-buttons">
              <div>
                {this.state.count > 0 ? (
                  <button type="button" onClick={() => this.decreaseCount()}>
                    Previous
                  </button>
                ) : null}
                {this.state.count === this.state.data.length - 1 ? (
                  <Link
                    to={{
                      pathname: '/results',
                      state: {
                        theIngredients: this.state.ingredients,
                        theMeats: this.state.meats,
                        theSeafood: this.state.seafood
                      }
                    }}
                  >
                    <button type="button">Get Matches</button>
                  </Link>
                ) : (
                  <button type="button" onClick={() => this.increaseCount()}>
                    Next
                  </button>
                )}
              </div>
            </Row>
          </Col>
          <Col sm={5}>
            <CuttingBoard
              sendFunction={this.removeIngredient}
              ingredients={this.state.ingredients}
              meal={this.state.meal}
            />
          </Col>
        </Row>
      </Container>
    ) : (
      'Loading'
    )
  }
}
