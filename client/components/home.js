import React from 'react'
import {Link, Route} from 'react-router-dom'
import {Row, Col, Button, Container} from 'react-bootstrap'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {}

  render() {
    return (
      <div>
        {/* <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron> */}
        <div className="img-wrapper">
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1231&q=80"
          />
          <div className="img-overlay">
            <Row className="row-homepage">
              <Col sm={6} />

              <Col sm={4}>
                <Link to="/quiz">
                  <Button className="btn-responsive" size="lg">
                    Match Me
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

// const mapStateToProps

// const mapDispatchToProps

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
