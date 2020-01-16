import React, { Component } from 'react';
import { Container, Row  } from 'reactstrap';
import { Link } from 'react-router-dom'
import Axios from 'axios';

export default class GiftCards extends Component {
  offset = 0;
  allLoaded = false;

  constructor(props) {
    super(props);

    this.state = {
      giftcards: []
    }
  }

  componentWillMount() {
    this.loadGiftCards();
  }

  loadGiftCards = () => {
    if(!this.allLoaded) {
      const url = `${process.env.REACT_APP_API_URL}/giftcards?offset=${this.offset}`
      Axios.get(url)
        .then(res => {

          if (res.data.number_of_results === 0) {
            this.allLoaded = true;
            return;
          }

          this.setState({giftcards: this.state.giftcards.concat(res.data.brands)})
          
        }).catch(error => {
          console.log(error)
        })
    }
  }

  displayGiftCards = () => {
    if (this.state.giftcards.length > 0) {
      console.log(this.state.giftcards)
      return(
          this.state.giftcards.map(card => (
          <Link to={card.brand_code} key={card.brand_code}>
            <div className="gift-cards-item">
              <img src={card.image_url} alt="card"/>
            </div> 
          </Link>
        ))
      )
    }
  }


  render() {
    return (
      <div>
         <h4 id="action-title">Select a Gift Card</h4>
        <Row className="gift-cards-items"> 
          { this.displayGiftCards() }
        </Row>
      </div>
    );
  }
}