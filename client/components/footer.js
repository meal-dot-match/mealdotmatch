import React from 'react'
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from 'mdbreact'

const Footer = () => {
  return (
    <MDBFooter bg="light" variant="light">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol>
              &copy; {new Date().getFullYear()} Copyright:{' '}
              <a href="https://meal-dot-match.herokuapp.com">
                meal-dot-match.herokuapp.com
              </a>
            </MDBCol>
            <MDBCol>Contact Us: mealdotmatch@gmail.com</MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
