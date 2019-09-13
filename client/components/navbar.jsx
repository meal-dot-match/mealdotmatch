import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav, FormControl, Form, Button} from 'react-bootstrap'

const Navigation = () => {
  const [searchInput, setSearchInput] = useState('')

  const handleInput = ({target: {value}}) => {
    setSearchInput(value)
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">Meal.Match</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
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
            value={searchInput}
            onChange={handleInput}
          />
          <Link
            to={{
              pathname: '/searchbarresults',
              searchBar: searchInput.replace(/\s/g, '+')
            }}
          >
            <Button variant="outline-info" type="submit">
              Search
            </Button>
          </Link>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
