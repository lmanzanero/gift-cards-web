import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

const order = {
     name: "Amazon Gift Card",
     date: "Current Date",
     to: "Luis Manzanero",
     from: "Reggie Escobar",
     message: "Here is your gift",
     quantity: 1,
     region: "BZ",
     serviceFee: 3,
     total: 100
}

export default class CheckOut extends Component {  

  saveOrdertoDb = () => {
    fetch('http://localhost:5000/api/orders/check-out', {
      method: 'POST', // or 'PUT' 
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    }) 
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
  }

    render() { 
        const { country, amount, email, from, message, quantity } = this.props.location.state 
        return ( 
            <Container className="confirmation-container" fluid={true}>
                <Row>
                    <Col xs="9"> 
                        <p className="title">Purchase Confirmation</p>
                        <div className="purchase-confirmation-box">
                            <hr className="my-2"/>  
                            <br/>
                            <Row>
                            <Col xs="3">
                                <div className="hero-container">
                                     <img src="https://lh3.googleusercontent.com/7Rp8nh8n5Y3DdY-YM01O0gSDqa-BwKYlKGzwPMlBvFsOaaHYfVdQ4uJhs-AY_w07dZdsnTFz8XIYeBZ6w7RGfwJeVTt93ISin6rXHA=s0" alt="card"/>
                                </div>
                            </Col>
                            <Col xs="9">
                                <p className="title">Google Play Card</p>
                                <Row>
                                    <Col xs="8">
                                        <div className="table-box-right"> 
                                            <table> 
                                                <tr>
                                                    <td className="table-title">To:</td>
                                                    <td className="value">{email}</td>
                                                </tr>
                                                <tr>
                                                    <td className="table-title">From:</td>
                                                    <td className="value">{from}</td>
                                                </tr>  
                                                <tr>
                                                    <td className="table-title">Message:</td>
                                                    <td className="value">{message}</td>
                                                </tr>  
                                            </table> 
                                        </div>
                                    </Col>
                                    <Col xs="4">
                                        <div className="table-box-right"> 
                                            <table> 
                                                <tr>
                                                    <td className="table-title">Amount:</td>
                                                    <td className="value"> ${amount}</td>
                                                </tr>
                                                <tr>
                                                    <td className="table-title">Quantity:</td>
                                                    <td className="value">{quantity}</td>
                                                </tr>  
                                                <tr>
                                                    <td className="table-title">Region:</td>
                                                    <td className="value">{country}</td>
                                                </tr>  
                                            </table> 
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            </Row>
                        </div> 
                    </Col>

                    <Col xs="3"> 
                        <div className="order-details-box">
                            <p className="header-title">Order Details</p>
                            <div className="table-box-left">
                                <hr className="my-2" />
                                <table> 
                                    <tr>
                                        <td className="table-title">Face Value</td>
                                        <td  className="value" align="right">$25</td>
                                    </tr>
                                    <tr>
                                        <td className="table-title">Quantity</td>
                                        <td  className="value" align="right">1x</td>
                                    </tr>
                                    <hr className="my-2" />
                                    <tr>
                                        <td className="table-title">Sub Total</td>
                                        <td className="value" align="right">$25</td>
                                    </tr> 
                                    <tr>
                                        <td className="table-title">Service Fee & Tax</td>
                                        <td className="value" align="right">$3</td>
                                    </tr>
                                    <hr className="my-2"/>
                                    <tr>
                                        <td className="table-title" style={{fontWeight: "bold"}}>Total</td> 
                                        <td className="value" align="right">$28</td> 
                                    </tr>
                                </table> 
                            </div>
                        </div>
                        <br/>
                        <button className="main-button" onClick={() => this.saveOrdertoDb()}>Buy Now</button>
                    </Col>
                </Row>
            </Container>
        );
    }
}