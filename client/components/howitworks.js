import React from 'react'
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
                  started, click on the quiz below. Otherwise, to learn more,
                  scroll down. Scroll down to learn more about
                </p>
                <Button className="btn-responsive">Match Me Now</Button>
                <Row style={{height: 100, padding: 50}}>
                  <p id="scroll-arrow" className="how-it-works-banner-scroll">
                    <a href="#how-it-works" />
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
          <Row id="how-it-works">
            <Col className="how-it-works-steps">
              <h6>
                <strong>Step 1 </strong>
                <br />Check your pantry and fridge.
              </h6>
              <div className="w-100" />
              <Col className="how-it-works-instructions-column">
                DId this work?
              </Col>
            </Col>

            <Col className="how-it-works-steps">
              <h6>
                <strong>Step 2</strong> <br />Match foods in your fridge and
                pantry to items on the quiz.
              </h6>
              <div className="w-100" />
              <Col className="how-it-works-instructions-column">
                DId this work?
              </Col>
            </Col>
            <Col className="how-it-works-steps">
              <h6>
                <strong>Step 3</strong> <br />View your matches and choose the
                recipe you want to cook.
              </h6>
              <div className="w-100" />
              <Col className="how-it-works-instructions-column">
                DId this work?
              </Col>
            </Col>
            <Col className="how-it-works-steps">
              <h6>
                <strong>Step 4</strong> <br />Send any missing ingredients to
                your phone.
              </h6>
              <div className="w-100" />
              <Col className="how-it-works-instructions-column">
                DId this work?
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default HowItWorks
