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
          <Carousel>
            <Carousel.Item className="carousel-item">
              {/* <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                alt="Like cooking"
              /> */}
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
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
                alt="Stocked Pantry"
              />
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
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1547860664-b8537ca5f833?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="Women engineers"
              />
              <Carousel.Caption className="about">
                <h3>
                  {' '}
                  Any time you're ready to be matched with recipes, click the
                  "Match Me" button.
                </h3>
                <p>
                  Sometimes we just can't make it to the store and want to make
                  meals with the ingredients we already have. We couldn't find a
                  resource that offered us recipes catered towards our pantries,
                  so we built one!
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-item">
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1547860664-b8537ca5f833?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="Women engineers"
              />
              <Carousel.Caption className="about">
                <h3>
                  Want to learn more? Visit our How It Works page! Ready to take
                  the quiz?
                </h3>
                <p>Click on the buttons!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              How It Works
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Take the Quiz
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default GuidedTour
