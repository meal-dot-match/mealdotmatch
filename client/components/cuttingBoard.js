import React from 'react'
import {Button, Row} from 'react-bootstrap'

export default class CuttingBoard extends React.Component {
  constructor(props) {
    super(props)
    this.functionPassed = this.functionPassed.bind(this)
  }
  functionPassed(event) {
    this.props.sendFunction(event)
  }

  render() {
    return (
      <>
        <Row className="center-text">
          <h3>Prep Time: {this.props.time}</h3>
        </Row>

        <Row className="container-class">
          {this.props.ingredients[0]
            ? this.props.ingredients.map(ingredient => {
                return (
                  <p key={Math.random()} className="cutting-board-ingredients">
                    <Button
                      size="sm"
                      type="button"
                      className="close"
                      onClick={() => {
                        this.functionPassed(event)
                      }}
                      id={ingredient}
                    >
                      {/* <strong id={ingredient}></strong> */}
                      {ingredient}
                    </Button>
                  </p>
                )
              })
            : null}
        </Row>
      </>
    )
  }
}
