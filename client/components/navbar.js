import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import {Navbar, Nav, FormControl, Form, Button} from 'react-bootstrap'

class Navigation extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit(this)
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }
  handleSubmit() {
    // console.log('did this go through???')
  }

  render() {
    // console.log('what is the state in my navbar?????', this.state.value)
    let test = 'hello'
    return (
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">Meal.Match</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/howitworks">How It Works</Nav.Link>
            <Nav.Link href="/about">Our Story</Nav.Link>
            <Nav.Link href="/quiz">Get Matched</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search recipes..."
              className="mr-sm-2"
              value={this.state.value}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
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

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navigation)

/**
 * PROP TYPES
 */
Navigation.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

//  <h1>
//       <img src="logo.png" height="400" />
//     </h1>
//     <nav>
//       {isLoggedIn ? (
//         <div>
//           {/* The navbar will show these links after you log in */}
//           <Link to="/home">Home</Link>
//           <a href="#" onClick={handleClick}>
//             Logout
//           </a>
//           <Link to="/about">About</Link>
//           <Link to="/faq">FAQ</Link>
//           <input placeholder="Find a recipe" />
//           <button>Search</button>
//         </div>
//       ) : (
//         <div>
//           {/* The navbar will show these links before you log in */}
//           <Link to="/about">About</Link>
//           <Link to="/faq">FAQ</Link>
//           <input placeholder="Find a recipe" />
//           <button>Search</button>
//         </div>
//       )}
//     </nav>
//     <hr />
