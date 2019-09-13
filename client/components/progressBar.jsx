import React from 'react'

const ProgressBar = ({count}) => {
  let value = Math.floor((count + 1) / 7 * 100)

  return (
    <div className="progress" style={{margin: 25}}>
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

export default ProgressBar
