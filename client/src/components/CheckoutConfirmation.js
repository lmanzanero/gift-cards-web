import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

export default class CheckOut extends Component { 
    render() { 
        return ( 
            <Container className="confirmation-container" fluid={true}>
                <Row>
                    <Col xs="9"> 
                        <p className="title">Purchase Confirmation</p>
                        <hr className="my-2"/>  
                        <div className="purchase-confirmation-box">
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
                                                    <td className="title">To:</td>
                                                    <td className="value">christine.wei1995@gmail.com</td>
                                                </tr>
                                                <tr>
                                                    <td className="title">From:</td>
                                                    <td className="value">Reggie Escobar</td>
                                                </tr>  
                                                <tr>
                                                    <td className="title">Message:</td>
                                                    <td className="value">I hope your enjoy this gift!</td>
                                                </tr>  
                                            </table> 
                                        </div>
                                    </Col>
                                    <Col xs="4">
                                        <div className="table-box-right"> 
                                            <table> 
                                                <tr>
                                                    <td className="title">Amount:</td>
                                                    <td className="value"> $25</td>
                                                </tr>
                                                <tr>
                                                    <td className="title">Quantity:</td>
                                                    <td className="value">1</td>
                                                </tr>  
                                                <tr>
                                                    <td className="title">Region:</td>
                                                    <td className="value">USA</td>
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
                            <p className="title">Order Details</p>
                            <div className="table-box-left">
                                <hr className="my-2" />
                                <table> 
                                    <tr>
                                        <td>Face Value</td>
                                        <td align="right">$25</td>
                                    </tr>
                                    <tr>
                                        <td>Quantity</td>
                                        <td align="right">1x</td>
                                    </tr>
                                    <hr className="my-2" />
                                    <tr>
                                        <td>Sub Total</td>
                                        <td align="right">$25</td>
                                    </tr> 
                                    <tr>
                                        <td>Service Fee & Tax</td>
                                        <td align="right">$3</td>
                                    </tr>
                                    <hr className="my-2"/>
                                    <tr>
                                        <td>Total</td> 
                                    </tr>
                                </table> 
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}