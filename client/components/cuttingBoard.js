import React from 'react'

export default class CuttingBoard extends React.Component {
  render() {
    console.log('this is props on the cutting board!!!', this.props)
    return (
      <div>
        <h3>Your Cutting Board:</h3>
        <div className="container-class">
          <div id="topcenter" className="row">
            <div className="column">
              <h4>Meal:</h4>
              <div className="row-ingredients">{this.props.meal}</div>
            </div>
          </div>
          <div id="cuttingboardcenter" className="row">
            <div className="column">
              <h4>Ingredients:</h4>
              {this.props.ingredients[0]
                ? this.props.ingredients.map(ingredient => {
                    return (
                      <div key={Math.random()} className="row-ingredients">
                        {ingredient}
                      </div>
                    )
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
