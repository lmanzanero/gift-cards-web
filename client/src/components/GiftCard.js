import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

export default class GiftCard extends Component { 
    render() { 
        return ( 
            <Container>
                <Row>
                    <Col xs="6">
                        Card Image
                    </Col>

                    <Col xs="6">
                        Google Play Gift Card
                    </Col>
                </Row>
            </Container>
        );
    }
}