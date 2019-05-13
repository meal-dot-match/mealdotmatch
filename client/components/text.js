import React from 'react'
import {Form, FormGroup, Button, Modal} from 'react-bootstrap'
import axios from 'axios'

class Text extends React.Component {
  async onSubmit(textToSend) {
    console.log('what is the text to send???', textToSend)
    await axios.post('/api/sendtext', textToSend)
  }

  render() {
    console.log('what is the props for the text message?????????', this.props)

    console.log(
      'what is this strigified??????????????',
      JSON.stringify(this.props.missingIngredients)
    )

    const textToSend = {
      ingredients: this.props.missingIngredients,
      url: this.props.url,
      name: this.props.name
    }

    return (
      <>
        <Form>
          <FormGroup>
            <Form.Label> Mobile Phone Number </Form.Label>
            <Form.Control type="phone" placeholder="555-555-5555" />
            <Form.Text className="text-muted">
              Don't worry, we won't share your phone number
            </Form.Text>
          </FormGroup>
          <Button onClick={() => this.onSubmit(textToSend)}> Submit </Button>
        </Form>
      </>
    )
  }
}

export default Text
