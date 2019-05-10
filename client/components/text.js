import React from 'react'
import {Form, FormGroup, Button} from 'react-bootstrap'
import axios from 'axios'

class Text extends React.Component {
  async onSubmit() {
    await axios.get('api/sendtext')
  }

  render() {
    console.log('what is the props?????????', this.props)
    return (
      <Form>
        <FormGroup>
          <Form.Label>Mobile Phone Number</Form.Label>
          <Form.Control type="phone" placeholder="Enter mobile number" />
          <Form.Text className="text-muted">
            We won't share your phone number
          </Form.Text>
        </FormGroup>
        <Button onClick={this.onSubmit}>Submit</Button>
      </Form>
    )
  }
}

export default Text
