import React from 'react'
import {Link} from 'react-router-dom'
import {Modal, Carousel, Row, Col, Button} from 'react-bootstrap'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {}

  render() {
    return (
      <div>
        <div className="img-wrapper">
          <img
            className="img-responsive"
            src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1231&q=80"
          />
          <div className="img-overlay">
            <Row className="row-homepage">
              <Col sm={6} />
              <Col sm={5}>
                <Row className="row-homepage">
                  <h1 className="text-center"> Welcome to Meal.Match </h1>
                  <p>
                    Have items in your pantry but not sure what to make?
                    <br />
                    Fill out our short quiz to see recipes that match what you
                    have, not what you need.
                  </p>
                </Row>
                <Row>
                  <Col>
                    Been here before?
                    <Link to="/quiz">
                      <Button className="btn-responsive" size="lg">
                        Take the Quiz
                      </Button>
                    </Link>
                  </Col>
                  <Col>
                    New to Meal.Match?
                    <Button
                      className="btn-responsive"
                      size="lg"
                      data-toggle="modal"
                      data-target="#guidedTour"
                    >
                      Take the Guided Tour
                    </Button>
                    <Modal>
                      <div class="modal" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title">Modal title</h5>
                              <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <p>Modal body text goes here.</p>
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-primary">
                                Save changes
                              </button>
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal>
                    <div
                      // class="modal fade"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="ModalCarouselLabel"
                      id="#guidedTour"
                    />
                    {/* <Modal id="#guidedTour">Hello!</Modal> */}
                  </Col>
                </Row>
              </Col>
              <Col sm={1} />
            </Row>
          </div>
        </div>
      </div>
    )
  }
}
