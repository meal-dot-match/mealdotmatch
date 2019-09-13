import React from 'react'

const MaxMessage = ({foodType, alert, max}) => {
  const meatsOrSeafood = foodType === 'meats' || foodType === 'seafood'

  const warningMsg = meatsOrSeafood
    ? `You have already selected the max total of 2 meats and seafoods.`
    : ` You have already selected the max total of ${max} ${foodType}`
  const alertMsg = meatsOrSeafood
    ? `(you may choose a total of 2 meats and seafoods)`
    : `(choose up to ${max})`

  if (alert) {
    return (
      <div className="alert alert-warning " role="alert">
        {warningMsg}
      </div>
    )
  } else {
    return <div className="quiz-alert-choices">{alertMsg}</div>
  }
}

export default MaxMessage
