import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

export default class GiftCard extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          country: "",
          amount: "",
          email: "",
          from: "",
          message: "",
          quantity: ""
        };
      }

    getOrderDetails = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    saveOrder = () => {
        console.log(this.state)
    }


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
                                        <label>Country</label>
                                        <select id="country" name="country" preventDefault="true" value={this.state.country} onChange={(e) => this.getOrderDetails(e)}>
                                            <option >Choose a country</option>
                                            <option value="belize">Belize</option>
                                            <option value="canada">Canada</option>
                                            <option value="usa">USA</option>
                                        </select>
                                        </div>
                                    </Row>
                                
                                    <Row>
                                       <div className="form-group">
                                       <label>Amount</label> 
                                            <button name="amount" onClick={(e) => this.getOrderDetails(e)} value="25">$25</button>
                                            <button name="amount" onClick={(e) => this.getOrderDetails(e)} value="50">$50</button>
                                            <button name="amount" onClick={(e) => this.getOrderDetails(e)} value="75">$75</button>
                                            <button name="amount" onClick={(e) => this.getOrderDetails(e)} value="100">$100</button>
                                       </div>
                                    </Row>

                                    <Row>
                                        <div className="form-group">
                                        <label>To</label>
                                        <input type="text" id="to" name="email" placeholder="Enter your email address"
                                            onChange={(e) => this.getOrderDetails(e)}
                                        />
                                        </div>
                                    </Row>

                                    <Row>
                                       <div className="form-group">
                                       <label>From</label>
                                        <input type="text" id="from" name="from" placeholder="Your name"
                                          onChange={(e) => this.getOrderDetails(e)}
                                        />
                                       </div>
                                    </Row>

                                    <Row>
                                        <div className="form-group">
                                        <label id="message-label" >Message</label>
                                             <textarea rows="4" cols="50" id="message" name="message" onChange={(e) => this.getOrderDetails(e)}></textarea>
                                        </div>
                                    </Row>

                                    <Row>
                                        <div className="form-group">
                                        <label for="quantity">Quantity</label>
                                        <input type="number" id="quantity" name="quantity" placeholder="0" min="0"  
                                          onChange={(e) => this.getOrderDetails(e)}
                                        />
                                        </div>
                                    </Row>
                                    <Link ><button className="main-button" onClick={(e) => this.saveOrder()}>Buy Now</button></Link>
                                </div>
                            </form>
                         </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}