import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

class AppNavbar extends Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.state({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <div>
         <Container> 
           <h1 className="main-title"><Link to="/">Gift Cards <br/>Belize</Link></h1>
           <p className="sub-title">Purchase cards with your Oblip account</p>

            <div className="bread-crumbs">
              <p>Home</p>
            </div>
        </Container>
    </div>
    )
  }
}

export default AppNavbar;