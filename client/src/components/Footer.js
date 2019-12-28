import React, { Component } from 'react'; 
import { Row , Col, Container } from 'reactstrap'

export default class Footer extends Component {
    render() { 
        return ( 
           <Container className="footer-container" fluid={true}>
                <Row>
                    <Col xs="1"> 
                    </Col>
                    <Col xs="3">
                        <p className="footer-logo-text">Powered By</p>
                        <div className="footer-logo">
                        <a href="#"><img src="/logo192.png"/></a>
                        </div> 
                        <div className="footer-copy-right">
                            <p>Copyright @ giftcards Belize</p>
                            <div className="footer-social-logos">
                               <a href="#"><img src="/logo192.png" alt="facebook"/></a>
                               <a href="#"><img src="/logo192.png" alt="twitter"/></a>
                               <a href="#"><img src="/logo192.png" alt="instagram"/></a>
                            </div>
                        </div>
                    </Col>
                    <Col xs="2">
                      <div className="footer-col">
                      <p className="footer-header">Company</p>
                       <ul>
                           <li>
                               <a href="#">About</a>
                            </li>
                            <li>
                               <a href="#">Blog</a>
                            </li>
                       </ul>
                      </div>
                    </Col>
                    <Col xs="2">
                       <div className="footer-col">
                       <p className="footer-header">Help Center</p>
                        <ul>
                            <li>
                                <a href="#">Support</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                        </ul>  </div>  
                    </Col> 
                </Row>
           </Container>
        );
      }
}