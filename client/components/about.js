import React from 'react'
import {Carousel, Container, Row, Col, Image} from 'react-bootstrap'

const About = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
            alt="Like cooking"
          />
          <Carousel.Caption className="about">
            <h3> We love food. </h3>
            <p>
              We built a website to allow other foodies to discover new recipes.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
            alt="Stocked Pantry"
          />
          <Carousel.Caption className="about">
            <h3>We have unused items in our pantry.</h3>
            <p>
              It's difficult figuring out what you can cook with the items you
              already have. Meal.Match hopes to inspire you with recipes you can
              cook without a trip to the grocery store.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1547860664-b8537ca5f833?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Women engineers"
          />
          <Carousel.Caption className="about">
            <h3> We're talented coders. </h3>
            <p>
              Sometimes we just can't make it to the store and want to make
              meals with the ingredients we already have. We couldn't find a
              resource that offered us recipes catered towards our pantries, so
              we built one!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container style={{padding: '50px'}}>
        <Row className="center-text">
          <h1> Meet Our Founders </h1>
        </Row>
        <Row className="center-text">
          <p>Meet the software engineers who built Meal.Match.</p>
        </Row>
        <Row>
          <Col xs={4} md={3}>
            <Image
              src="https://media.licdn.com/dms/image/C4E03AQGYdwq4BGOlEA/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=OTaezQD1fgjg3zPKgSWemzf2txMFXp5uO8FOuG1b-Eg"
              roundedCircle
              height="171"
              width="180"
              alt="Amy"
            />
          </Col>
          <Col xs={4} md={3}>
            <Image
              src="https://media.licdn.com/dms/image/C4E03AQEH5FZZ7G69zA/profile-displayphoto-shrink_800_800/0?e=1563408000&v=beta&t=O990QMghkIrJF0G2OeGXfkjcTDwsGsPSrZWLAp1KH7A"
              roundedCircle
              height="171"
              width="180"
              alt="Ann"
            />
          </Col>
          <Col xs={4} md={3}>
            <Image
              src="https://media.licdn.com/dms/image/C4D03AQGZqm6RFr5l7w/profile-displayphoto-shrink_800_800/0?e=1563408000&v=beta&t=BUAunY5qwTczppWMaZpEBlYtzjaFz9mbZjyuEI7YxGM"
              roundedCircle
              height="171"
              width="180"
              alt="Katie"
            />
          </Col>
          <Col xs={4} md={3}>
            <Image
              src="https://media.licdn.com/dms/image/C4D03AQFEDOfd93Owww/profile-displayphoto-shrink_800_800/0?e=1563408000&v=beta&t=9Jm_jwq5ArhToxc_0ZDep-47IAX03pN-AvBflnXO9xQ"
              roundedCircle
              height="171"
              width="180"
              alt="KV"
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="center-text">
          <h1> Our Vision </h1>
        </Row>
        <Row className="center-text">
          <p>
            Meet the female software engineers who brought Meal.Match from an
            idea to an application.
          </p>
        </Row>
      </Container>
    </div>
  )
}

export default About
