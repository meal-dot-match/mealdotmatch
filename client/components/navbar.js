import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Navbar, Nav, FormControl, Form, Button} from 'react-bootstrap'

class Navigation extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">Meal.Match</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/howitworks">How It Works</Nav.Link>
            <Nav.Link href="/about">Our Story</Nav.Link>
            <Nav.Link href="/quiz">Start Now</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search recipes..."
              className="mr-sm-2"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <Link
              to={{
                pathname: '/searchbarresults',
                searchBar: this.state.value.replace(/\s/g, '+')
              }}
            >
              <Button variant="outline-info" type="submit">
                Search
              </Button>
            </Link>
          </Form>
        </Navbar>
      </>
    )
  }
}

export default Navigation
