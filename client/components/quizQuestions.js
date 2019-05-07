import React from 'react'

export default class Quiz extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h3>What meal would you like to make?</h3>
        <button type="button">Breakfast</button>
        <button type="button">Lunch</button>
        <button type="button">Dinner</button>
        <button type="button">Dessert</button>
        <br />
      </div>
      // render different quiz questions based on what page of quiz you are on. Each time a selection is made by visitor, pass that info to redux so that redux will re-render the CuttingBoard component.
    )
  }
}

// const mapStateToProps

// const mapDispatchToProps

// export default connect(mapStateToProps, mapDispatchToProps)(Quiz)
