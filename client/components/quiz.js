import React from 'react'
import {CuttingBoard, MaxMessage, ProgressBar} from './index'
import axios from 'axios'
import {ListGroup, Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Quiz extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      time: '',
      meats: [],
      seafood: [],
      dairy: [],
      'vegetable(s)': [],
      'fruit(s)': [],
      'grain(s)': [],
      ingredients: [],
      data: [],
      alert: false,
      selected: ''
      // if any additional fields are added to state, they may need to be included as exclusions in the removeIngredient function
    }
    this.removeIngredient = this.removeIngredient.bind(this)
    this.increaseCount = this.increaseCount.bind(this)
    this.decreaseCount = this.decreaseCount.bind(this)
    this.addToIngredients = this.addToIngredients.bind(this)
    this.filterOutIngredients = this.filterOutIngredients.bind(this)
    this.setTime = this.setTime.bind(this)
    this.setSelected = this.setSelected.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/questions')
    this.setState({data: data})
  }

  handleClick(event, foodType) {
    console.log('is this even changing??', event.target.className)
    this.setSelected(event.target.alt)
    foodType !== 'time'
      ? this.filterOutIngredients(event, foodType)
      : this.setTime(event)
  }

  setSelected(alt) {
    this.setState({
      selected: alt
    })
  }

  filterOutIngredients(event, foodType) {
    const max = this.state.data[this.state.count].max
    const meatAndSeafoodLength =
      this.state.meats.length + this.state.seafood.length

    if (
      !this.state.ingredients.includes(event.target.alt) &&
      this.state[foodType].length < max
    ) {
      if (foodType !== 'meats' && foodType !== 'seafood') {
        this.addToIngredients(event.target.alt, true, foodType)
      }
      if (foodType === 'meats' || foodType === 'seafood') {
        meatAndSeafoodLength < 2
          ? this.addToIngredients(event.target.alt, true, foodType)
          : this.addToIngredients(null, false)
      }
    } else {
      this.addToIngredients(null, false)
    }
  }

  addToIngredients(food, boolean, foodType) {
    boolean
      ? this.setState({
          ingredients: [...this.state.ingredients, food],
          [foodType]: [...this.state[foodType], food],
          alert: false
        })
      : this.setState({
          alert: true
        })
  }

  setTime(event) {
    this.setState({
      time: event.target.alt
    })
  }

  removeIngredient(event) {
    const ingredientsLeft = this.state.ingredients.filter(item => {
      return item !== event.target.id
    })
    const foodType = Object.keys(this.state)
      .filter(food => {
        return (
          Array.isArray(this.state[food]) &&
          food !== 'data' &&
          food !== 'ingredients'
        )
      })
      .filter(food => {
        return this.state[food].includes(event.target.id)
      })[0]

    const foodTypeIngredientsLeft = this.state[foodType].filter(item => {
      return item !== event.target.id
    })
    this.setState({
      ingredients: ingredientsLeft,
      [foodType]: foodTypeIngredientsLeft,
      alert: false
    })
  }

  increaseCount() {
    let newCount = this.state.count + 1
    let foodType = this.state.data[this.state.count].question.split(' ')[1]

    if (foodType === 'meats') {
      this.setState({count: newCount, skipNext: 'Skip'})
    } else {
      this.setState({
        count: newCount,
        alert: false,
        skipNext: 'Skip'
      })
    }
  }

  decreaseCount() {
    let newCount = this.state.count - 1
    let foodType = this.state.data[this.state.count].question.split(' ')[1]

    if (foodType === 'seafood') {
      this.setState({count: newCount})
    } else {
      this.setState({
        count: newCount,
        alert: false
      })
    }
  }

  render() {
    let foodType
    const questions = this.state.data[this.state.count]
    if (questions !== undefined) {
      foodType = questions.question.split(' ')[1]
    }

    console.log('this is my state', this.state.time)

    return this.state.data[0] ? (
      <Container className="quiz-container" sm={12} md={12} lg={12}>
        <Row>
          <Col sm={4} md={4} lg={4} className="quiz-columns">
            <CuttingBoard
              sendFunction={this.removeIngredient}
              ingredients={this.state.ingredients}
              time={this.state.time}
            />
          </Col>
          <Col sm={6} md={6} lg={6} className="quiz-columns">
            <ProgressBar count={this.state.count} />
            <Row>
              <h2 className="question"> {questions.question} </h2>
              <MaxMessage
                max={this.state.data[this.state.count].max}
                foodType={
                  this.state.data[this.state.count].question.split(' ')[1]
                }
                alert={this.state.alert}
                length={this.state[foodType].length}
                food={foodType}
              />
            </Row>
            <Row className="quiz-row-options">
              {questions.image.map((picture, index) => {
                return (
                  <div key={Math.random()}>
                    <div className="option-with-label ">
                      <div className="label"> {questions.name[index]} </div>
                      <img
                        className={`${
                          this.state.selected === questions.name[index]
                            ? 'selected'
                            : 'options'
                        }`}
                        src={picture}
                        alt={questions.name[index]}
                        onClick={() => this.handleClick(event, foodType)}
                      />
                    </div>
                  </div>
                )
              })}
            </Row>
            <Row className="quiz-prev-next-buttons">
              {this.state.count > 0 ? (
                <Button
                  className="skipNextPrevButtons"
                  onClick={() => this.decreaseCount()}
                >
                  Previous
                </Button>
              ) : null}
              <Link
                to={{
                  pathname: '/results',
                  state: {
                    theIngredients: this.state.ingredients,
                    theMeats: this.state.meats,
                    theSeafood: this.state.seafood,
                    time: this.state.time
                  }
                }}
              >
                <Button className="btn-responsive" size="lg" id="matchMe">
                  Match Me
                </Button>
              </Link>
              {this.state.count === this.state.data.length - 1 ? null : (
                <Button
                  className="skipNextPrevButtons quiz-next-button"
                  onClick={() => this.increaseCount()}
                >
                  {this.state[foodType].length > 0 ? 'Next' : 'Skip'}
                </Button>
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    ) : (
      'Loading'
    )
  }
}
