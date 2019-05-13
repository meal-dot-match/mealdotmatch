import React from 'react'
import {Form, FormGroup, Button} from 'react-bootstrap'
import axios from 'axios'

class Text extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.changeInput = this.changeInput.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  async onSubmit(phone) {
    const phoneNumber = '+1' + phone.replace(/-| (\(|\))/gi, '')
    const textToSend = {
      ingredients: this.props.missingIngredients,
      url: this.props.url,
      name: this.props.name,
      to: phoneNumber
    }
    await axios.post('/api/sendtext', textToSend)
  }

  changeInput(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <>
        <Form>
          <FormGroup>
            <Form.Label> Mobile Phone Number </Form.Label>
            <Form.Control
              type="phone"
              placeholder="555-555-5555"
              value={this.state.value}
              onChange={this.changeInput}
            />
            <Form.Text className="text-muted">
              Don't worry, we won't share your phone number
            </Form.Text>
          </FormGroup>
          <Button onClick={() => this.onSubmit(this.state.value)}>
            Submit
          </Button>
        </Form>
      </>
    )
  }
}

export default Text
