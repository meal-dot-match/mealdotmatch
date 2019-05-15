import React, {Component} from 'react'
import {Form, FormGroup, Button} from 'react-bootstrap'
import axios from 'axios'

class Email extends Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
  }
  sendEmail(name, email, message) {
    try {
      const emailToSend = {
        name: name,
        email: email,
        message: message
      }
      console.log('Inside the sendEmail method', emailToSend)
      axios.post('/api/send', emailToSend)
    } catch (error) {
      console.error(error)
    }
  }
  
  render() {
    return (
      <Form>
        <FormGroup>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="phone"
            placeholder="abc@email.com"
            value={this.state.value}
            onChange={this.changeInput}
          />
          <Form.Text className="text-muted">
            We will not share your email address.
          </Form.Text>
        </FormGroup>
        <Button onClick={() => this.onSubmit(this.state.value)}>Submit</Button>
      </Form>
    )
  }
}

export default Email
