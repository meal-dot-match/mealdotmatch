import React from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <button>Sign In</button>
        <button>Match me!</button>
      </div>
    )
  }
}

// const mapStateToProps

// const mapDispatchToProps

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
