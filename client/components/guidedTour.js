import React from 'react'
import {
  Carousel,
  Container,
  Row,
  Col,
  Image,
  Button,
  Modal
} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class GuidedTour extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)

    this.state = {
      show: false
    }
  }

  handleClose() {
    this.setState({show: false})
  }

  handleShow() {
    this.setState({show: true})
  }

  render() {
    return (
      <>
        <Button
          className="btn-responsive"
          size="lg"
          variant="primary"
          onClick={this.handleShow}
        >
          Take a Tour
        </Button>
        <p>New to Meal.Match?</p>

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          dialogClassName="tutorialModal"
          centered
        >
          <Modal.Header closeButton>
            {/* <Modal.Title>Join us for a Tour of Meal.Match</Modal.Title> */}
          </Modal.Header>
          <Carousel interval={null}>
            <Carousel.Item className="carousel-item">
              <img src="/1-intro.jpg" className="tutorialImage" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img src="/1-choices.jpg" className="tutorialImage" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img src="/1-cuttingboard.jpg" className="tutorialImage" />
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <Modal.Body />
              <img src="/1-progressbar.jpg" className="tutorialImage" />
            </Carousel.Item>
            <Carousel.Item>
              <Modal.Body>
                Ready to take the quiz? Go ahead! If you'd like to learn more,
                click "How It Works."
              </Modal.Body>
              <Modal.Footer>
                <Link to="/howitworks">
                  <Button
                    className="btn-responsive-left-align"
                    size="md"
                    variant="secondary"
                  >
                    How It Works
                  </Button>
                </Link>
                <Link to="/quiz">
                  <Button
                    className="btn-responsive"
                    size="md"
                    variant="primary"
                  >
                    Take the Quiz
                  </Button>
                </Link>
              </Modal.Footer>
            </Carousel.Item>
          </Carousel>
        </Modal>
      </>
    )
  }
}

export default GuidedTour
