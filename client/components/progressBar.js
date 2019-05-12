import React from 'react'

class ProgressBar extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    let value = Math.floor(this.props.count / 7 * 100)

    return (
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{width: value + '%'}}
          aria-valuenow={{value}}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {value}%
        </div>
      </div>
    )
  }
}

export default ProgressBar
