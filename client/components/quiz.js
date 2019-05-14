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
      alert: false
      // if any additional fields are added to state, they may need to be included as exclusions in the removeIngredient function
    }
    this.removeIngredient = this.removeIngredient.bind(this)
    this.increaseCount = this.increaseCount.bind(this)
    this.decreaseCount = this.decreaseCount.bind(this)
    this.addToIngredients = this.addToIngredients.bind(this)
    this.filterOutIngredients = this.filterOutIngredients.bind(this)
  }

  async componentDidMount() {
    const {data} = await axios.get('/api/questions')
    this.setState({data: data})
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

  removeIngredient(event) {
    const ingredientsLeft = this.state.ingredients.filter(item => {
      return item !== event.target.id
    })
    const foodTypes = Object.keys(this.state).filter(foodType => {
      return (
        Array.isArray(this.state[foodType]) &&
        foodType !== 'data' &&
        foodType !== 'ingredients'
      )
    })
    const foodType = foodTypes.filter(food => {
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
      this.setState({count: newCount})
    } else {
      this.setState({
        count: newCount,
        alert: false
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

    return this.state.data[0] ? (
      <Container>
        <Row>
          <Col>
            <ProgressBar count={this.state.count} />
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
            <Row>
              {questions.image.map((picture, index) => {
                return (
                  <div key={Math.random()}>
                    <div className="option-with-label">
                      <div className="label"> {questions.name[index]} </div>
                      <div>
                        <img
                          className="options"
                          src={picture}
                          alt={questions.name[index]}
                          onClick={() =>
                            this.filterOutIngredients(event, foodType)
                          }
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </Row>
            <Row className="prev-next-buttons">
              <div>
                {this.state.count > 0 ? (
                  <Button
                    className="skipNextPrevButtons"
                    onClick={() => this.decreaseCount()}
                  >
                    Previous
                  </Button>
                ) : null}
                {'        '}
                {this.state.count === this.state.data.length - 1 ? null : (
                  <Button
                    className="skipNextPrevButtons"
                    onClick={() => this.increaseCount()}
                  >
                    {this.state[foodType].length > 0 ? 'Next' : 'Skip'}
                  </Button>
                )}
              </div>
            </Row>
            <Row>
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
            </Row>
          </Col>
          <Col sm={5}>
            <CuttingBoard
              sendFunction={this.removeIngredient}
              ingredients={this.state.ingredients}
              time={this.state.time}
            />
          </Col>
        </Row>
      </Container>
    ) : (
      'Loading'
    )
  }
}
