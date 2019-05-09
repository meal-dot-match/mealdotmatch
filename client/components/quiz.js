import React from 'react'
import {CuttingBoard} from './index'
import axios from 'axios'
import {graphql, Query} from 'react-apollo'
import {gql} from 'apollo-boost'

const getMealsQuery = gql`
  query($food: String) {
    searchRecipes(food: $food) {
      uri
      url
      label
      image
      calories
      totalTime
      ingredientLines
    }
  }
`

class Quiz extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      ingredients: [],
      data: [],
      meal: ''
    }
    this.increaseCount = this.increaseCount.bind(this)
    this.decreaseCount = this.decreaseCount.bind(this)
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

  sendStringToQuery() {
    console.log('In the sendStrFunc', this.state.ingredients)
    const stringQuery = this.state.ingredients.join('+').replace(/\s/g,'')
    console.log(stringQuery)
    return stringQuery;
  }

  render() {
    const questions = this.state.data[this.state.count]
    console.log('This is my state in the Quiz Component:', this.state)
    console.log('Here are the props in the Quiz Component', this.props.data)

    return (
      <Query query={getMealsQuery}>
        {({loading, error, data}) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`

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
                          <div className="centered">
                            {questions.name[index]}
                          </div>
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
                    <button
                      type="button"
                      onClick={() => {
                        this.sendStringToQuery()
                      }}
                    >
                      Get Matches
                    </button>
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
        }}
      </Query>
    )
  }
}

export default graphql(getMealsQuery)(Quiz)
