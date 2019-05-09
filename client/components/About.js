import React from 'react'
import {Carousel} from 'react-bootstrap'

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
      </Carousel>;
      <h1>Our Story</h1>
      <p>
        We want to create a recipe site that is personal to you and what you
        have in your pantry.
      </p>
    </div>
  )
}

export default About
