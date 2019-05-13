import React from 'react'
import {Form, FormGroup, Button, Modal} from 'react-bootstrap'
import axios from 'axios'

class Text extends React.Component {
  async onSubmit(textToSend) {
    await axios.post('api/sendtext', textToSend)
  }

  render() {
    console.log(
      'what is the props for the text message?????????',
      this.props.missingIngredients.missingIngredients
    )

    console.log(
      'what is this strigified??????????????',
      JSON.stringify(this.props.missingIngredients.missingIngredients)
    )

    const textToSend = JSON.stringify(
      this.props.missingIngredients.missingIngredients
    )
    return (
      <>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Centered Modal</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
        <Form>
          <FormGroup>
            <Form.Label> Mobile Phone Number </Form.Label>
            <Form.Control type="phone" placeholder="Enter mobile number" />
            <Form.Text className="text-muted">
              We won 't share your phone number
            </Form.Text>
          </FormGroup>
          <Button onClick={() => this.onSubmit(textToSend)}> Submit </Button>
        </Form>
      </>
    )
  }
}

export default Text
