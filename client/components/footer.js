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
              <a href="www.mealdotmatch.com">www.mealdotmatch.com</a>
            </MDBCol>
            <MDBCol>Contact Us: mealdotmatch@gmail.com</MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>
  )
}

export default Footer
