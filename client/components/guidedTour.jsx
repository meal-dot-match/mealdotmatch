import React, {useState} from 'react'
import {Carousel, Button, Modal} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const GuidedTour = () => {
  const [showTour, setShowTour] = useState(false)
  const images = [
    '1-intro',
    '1-choices',
    '1-cuttingboard',
    '1-progressbar',
    '1-buttons',
    '2-intro',
    '3-intro',
    '3-resultssingle',
    '4-intro',
    '4-searchbar'
  ]

  return (
    <>
      <Button
        className="btn-responsive"
        size="lg"
        variant="primary"
        onClick={() => setShowTour(true)}
      >
        Take Tour
      </Button>

      <p className="homepage-btn-text">New to Meal.Match?</p>
      <Modal
        show={showTour}
        onHide={() => setShowTour(false)}
        dialogClassName="tutorialModal"
        centered
      >
        <Modal.Header closeButton />
        <Carousel interval={null}>
          {images.map((image, index) => {
            return (
              <Carousel.Item key={image} className="carousel-item">
                <img
                  src={`/guidedTourPhotos/${images[index]}.jpg`}
                  className="tutorialImage"
                />
              </Carousel.Item>
            )
          })}
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
                <Button className="btn-responsive" size="md" variant="primary">
                  Start Now
                </Button>
              </Link>
            </Modal.Footer>
          </Carousel.Item>
        </Carousel>
      </Modal>
    </>
  )
}

export default GuidedTour
