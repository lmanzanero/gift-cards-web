import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

export default class GiftCard extends Component { 
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col xs="6">
                        <div className="hero-image-container">
                             <img src="https://lh3.googleusercontent.com/7Rp8nh8n5Y3DdY-YM01O0gSDqa-BwKYlKGzwPMlBvFsOaaHYfVdQ4uJhs-AY_w07dZdsnTFz8XIYeBZ6w7RGfwJeVTt93ISin6rXHA=s0" alt="card"/>
                        </div>
                    </Col>

                    <Col xs="6">
                         <Container>
                             <h4>Google Play Gift Card</h4>
                            <p> Power up in over 1M Android apps and games on Google Play, the world's largest mobile gaming platform. Use a Google Play card to go further in your favorite games like Clash Royale or Pokémon GO or redeem your card for the latest apps, movies, books, and more.</p>
                            <h5>Order Details</h5>
                            <hr className="my-2" />

                            <form>
                                <Link to="/check-out"><button className="main-button">Buy Now</button></Link>
                            </form>
                         </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}