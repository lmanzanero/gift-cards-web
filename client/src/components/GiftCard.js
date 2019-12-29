import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

export default class GiftCard extends Component { 
    render() { 
        return ( 
            <Container fluid={true}>
                <Row>
                    <Col xs="6">
                        <div className="hero-image-container">
                             <img src="https://lh3.googleusercontent.com/7Rp8nh8n5Y3DdY-YM01O0gSDqa-BwKYlKGzwPMlBvFsOaaHYfVdQ4uJhs-AY_w07dZdsnTFz8XIYeBZ6w7RGfwJeVTt93ISin6rXHA=s0" alt="card"/>
                        </div>
                    </Col>

                    <Col xs="6">
                         <Container>
                            <h4 style={{marginBottom: "11px"}}>Google Play Gift Card</h4> 
                            <p style={{fontSize: "14px", marginBottom: "31px"}}> Power up in over 1M Android apps and games on Google Play, the world's largest mobile gaming platform. Use a Google Play card to go further in your favorite games like Clash Royale or Pokémon GO or redeem your card for the latest apps, movies, books, and more.</p>
                            <h5 style={{marginBottom: "11px"}} >Order Details</h5>
                            <hr className="my-2" />
                            <form>
                                <div className="form-inner">
                                    <Row>
                                        <div className="form-group">
                                        <label for="region">Country</label>
                                        <select id="country" name="country">
                                            <option value="australia">Australia</option>
                                            <option value="canada">Canada</option>
                                            <option value="usa">USA</option>
                                        </select>
                                        </div>
                                    </Row>
                                
                                    <Row>
                                       <div className="form-group">
                                       <label for="amount">Amount</label> 
                                            <input type="text" id="amount" name="firstname" placeholder="$25" align="right"/>
                                            <input type="text" id="amount" name="firstname" placeholder="$50"/>
                                            <input type="text" id="amount" name="firstname" placeholder="$75"/>
                                            <input type="text" id="amount" name="firstname" placeholder="$100"/> 
                                       </div>
                                    </Row>

                                    <Row>
                                        <div className="form-group">
                                        <label for="to">To</label>
                                        <input type="text" id="to" name="firstname" placeholder="Enter your email address"/>
                                        </div>
                                    </Row>

                                    <Row>
                                       <div className="form-group">
                                       <label for="from">From</label>
                                        <input type="text" id="from" name="firstname" placeholder="Your name"/>
                                       </div>
                                    </Row>

                                    <Row>
                                        <div className="form-group">
                                        <label id="message-label" for="message">Message</label>
                                        <textarea rows="4" cols="50" id="message" name="message">I hope you enjoy this gift</textarea>
                                        </div>
                                    </Row>

                                    <Row>
                                        <div className="form-group">
                                        <label for="quantity">Quantity</label>
                                        <input type="number" id="quantity" name="firstname" placeholder="1"/>
                                        </div>
                                    </Row>
                                    <Link to="/check-out"><button className="main-button">Buy Now</button></Link>
                                </div>
                            </form>
                         </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}