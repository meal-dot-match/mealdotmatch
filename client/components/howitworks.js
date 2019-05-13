import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col, Image, Jumbotron, Button} from 'react-bootstrap'

class HowItWorks extends React.Component {
  render() {
    return (
      <div className="how-it-works-background">
        <Jumbotron className="how-it-works-banner">
          <Container xs={6} md={6} lg={6}>
            <Row>
              <Col className="how-it-works-banner-text">
                <h1>How Does Meal.Match Work?</h1>

                <p>
                  We match you to recipes that best fit the food items you
                  already have in your kitchen. You simply take a look at what's
                  in your pantry or fridge, and fill out our short quiz to let
                  us know what you have. We'll then match you to recipes. To get
                  started, click on the start now button below. Otherwise, to
                  learn more, scroll down.
                </p>
                <Link to={{pathname: `/quiz`}}>
                  <Button className="btn-responsive">Start now</Button>
                </Link>
                <Row style={{height: 100, padding: 50}}>
                  <p id="scroll-arrow" className="how-it-works-banner-scroll">
                    <a href="#instructions" />
                  </p>
                </Row>
              </Col>
              <Col />
            </Row>
          </Container>
        </Jumbotron>
        <Container>
          <Row style={{marginTop: 40, marginBottom: 40}}>
            <Col>
              <h4>Finding your match is easy!</h4>
            </Col>
          </Row>
          <Row id="instructions">
            <Col className="how-it-works-steps">
              <img src="https://image.flaticon.com/icons/png/512/60/60400.png" />
              <h5>
                <strong>Step 1 </strong>
              </h5>
              <h6>Check your pantry and fridge for food items.</h6>
              <div className="w-100" />
              <Col className="how-it-works-instructions-column">
                Take a look at the items you already have in your fridge and
                pantry. Then, determine which items you'd like to use in your
                meal.
              </Col>
            </Col>

            <Col className="how-it-works-steps">
              <img src="https://image.flaticon.com/icons/svg/1763/1763996.svg" />
              <h5>
                <strong>Step 2</strong>
              </h5>
              <h6>
                Choose the food items you have and want to cook with on our
                quiz.
              </h6>
              <div className="w-100" />
              <Col className="how-it-works-instructions-column">
                You'll have the ability to pick the meal you'd like to cook, any
                dairy, meats, vegetables, grains, and seafood. If you don't have
                any of those options on hand or don't want to use a particular
                category, you have the option to skip.
              </Col>
            </Col>
            <Col className="how-it-works-steps">
              <img src="https://image.flaticon.com/icons/svg/115/115766.svg" />
              <h5>
                <strong>Step 3</strong>
              </h5>
              <h6>View your matches!</h6>
              <div className="w-100" />
              <Col className="how-it-works-instructions-column">
                Based on your selections, we'll show you recipes and how many of
                the ingredients you have to complete the meal. This will be
                reflected in a percentage score. The higher the percentage, the
                less amount of extra ingredients you'll need.
              </Col>
            </Col>
            <Col className="how-it-works-steps">
              <img src="https://image.flaticon.com/icons/svg/685/685796.svg" />
              <h5>
                <strong>Step 4</strong>
              </h5>
              <h6>Missing ingredients? Send to your phone!</h6>
              <div className="w-100" />
              <Col className="how-it-works-instructions-column">
                If you are missing ingredients, Meal.Match makes it easy for you
                to send those ingredients to your phone. Simply click on the
                "Send to Phone" option on the recipe and you'll get a text with
                your missing ingredients.
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default HowItWorks
