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
            <h3>We love food.</h3>
            <p>
              We wanted to build a website that allows other foodies to discover
              new recipes.
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
            <h3>We have items in our pantry.</h3>
            <p>
              Sometimes we don't want to buy new food items when we already have
              items to work with in our pantry.
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
            <h3>We can code.</h3>
            <p>We decided to put our talents to use and create Meal.Match!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container style={{padding: '50px'}}>
        <Row className="center-text">
          <h1>Meet Our Founders</h1>
        </Row>
        <Row className="center-text">
          <p>
            Meet the female software engineers who brought Meal.Match from an
            idea to an application.
          </p>
        </Row>
        <Row>
          <Col xs={4} md={3}>
            <Image
              src="https://media.licdn.com/dms/image/C4E03AQGYdwq4BGOlEA/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=OTaezQD1fgjg3zPKgSWemzf2txMFXp5uO8FOuG1b-Eg"
              roundedCircle
              height="171"
              width="180"
            />
          </Col>
          <Col xs={4} md={3}>
            <Image
              src="https://media.licdn.com/dms/image/C4E03AQHew4LhGULilA/profile-displayphoto-shrink_200_200/0?e=1562803200&v=beta&t=vzOCxZW5yZL3u2Dc5RndP1jish1mQknE2XMWjqjFSxM"
              roundedCircle
              height="171"
              width="180"
            />
          </Col>
          <Col xs={4} md={3}>
            <Image
              src="https://media.licdn.com/dms/image/C4E03AQF0mEdtBQamtw/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=YqDdHfd4uG5lQHCZuceTeWaNfu2rytjiMd-Wi3siJ6Q"
              roundedCircle
              height="171"
              width="180"
            />
          </Col>
          <Col xs={4} md={3}>
            <Image
              src="https://media.licdn.com/dms/image/C4E03AQGsIKZqGKYHRQ/profile-displayphoto-shrink_800_800/0?e=1562803200&v=beta&t=8ifVjVsAnuREJnVLp6aZW92Nz9rURnj8qd6VW6ftWpE"
              roundedCircle
              height="171"
              width="180"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
