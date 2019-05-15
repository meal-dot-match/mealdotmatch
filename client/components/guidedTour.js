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
          Guided Tour
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Join us for a Tour of Meal.Match</Modal.Title>
          </Modal.Header>
          <Carousel interval="null">
            <Carousel.Item className="carousel-item">
              <Carousel.Caption className="about">
                <h3>
                  {' '}
                  Take our quiz to receive suggestions of recipes that match the
                  ingredients you have in your kitchen.
                </h3>
                <p>More text?</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <Carousel.Caption className="about">
                <h3>
                  Click on ingredients in the quiz to add them to your
                  Ingredients Board. Change your mind about an item? You can
                  remove it from the cutting board by clicking the X next to its
                  name.{' '}
                </h3>
                <p>More text?</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <Carousel.Caption className="about">
                <h3>
                  {' '}
                  Any time you're ready to be matched with recipes, click the
                  "Match Me" button.
                </h3>
                <p>More text?</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <Carousel.Caption className="about">
                <h3>
                  Want to learn more? Visit our How It Works page! Ready to take
                  the quiz?
                </h3>
                <p>Click on the buttons!</p>
              </Carousel.Caption>
              <Modal.Footer>
                <Link to="/howitworks">
                  <Button
                    className="btn-responsive"
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
