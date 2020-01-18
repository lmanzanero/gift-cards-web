import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

export default class CheckoutConfirmationSuccess extends Component {
    render() {
        return (
            <Container className="success-container" fluid={true}> 
				<p className="title">Your purchase was succesfully completed</p>
				<p className="sub-title" >We have sent the giftcard code to the email you supplied. If you did not recieve it please <br/> <Link to="/contact-us">contact us</Link>. </p>
				<Row>  
						<div className="box">
							<h5 align="left">Your Order</h5>
							<div className="box-inner">
								<p align="center">Google Play</p>
								<div className="hero-container">
									<img src="https://www.netclipart.com/pp/m/43-434517_gift-cards-png-google-play-card-50.png" alt="Google"/>
								</div>
							</div>
							<button>Continue Shopping</button>
						</div>  
				</Row> 
            </Container>
        )
    }
}
