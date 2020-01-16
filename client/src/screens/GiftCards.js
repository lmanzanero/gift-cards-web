import React, { Component } from 'react';
import { Container, Row  } from 'reactstrap';
import { Link } from 'react-router-dom'
import Axios from 'axios';

const footerHeight = 327;
const defaultLimit = 20;
const defaultOffsetPadding = 200;

export default class GiftCards extends Component {
  offset = 0;
  allLoaded = false;
  isLoadingMore = true;

  constructor(props) {
    super(props);

    this.state = {
      height: window.innerHeight,
      giftcards: []
    }
  }

  componentDidMount() {
    this.loadGiftCards();
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  loadMoreGiftCards = () => {
    if(!this.isLoadingMore) {
      this.isLoadingMore = true;
      this.offset += defaultLimit;
      this.loadGiftCards();
    }
  }
  
  loadGiftCards = () => {
    if(!this.allLoaded) {
      const url = `${process.env.REACT_APP_API_URL}/giftcards?offset=${this.offset}`
      Axios.get(url)
        .then(res => {

          if (res.data.number_of_results === 0) {
            this.allLoaded = true;
            this.isLoadingMore = false;
            console.log('No more to load')
            return;
          }

          this.setState({giftcards: this.state.giftcards.concat(res.data.brands)})
          this.isLoadingMore = false;
        }).catch(error => {
          console.log(error)
        })
    }
  }

  handleScroll = () => {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = (windowHeight + footerHeight + defaultOffsetPadding) + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.loadMoreGiftCards()
    } 
  }

  displayGiftCards = () => {
    if (this.state.giftcards.length > 0) {
      console.log(this.state.giftcards)
      return(
          this.state.giftcards.map(card => (
          <Link to={`/giftcard/${card.brand_code}`} key={card.brand_code}>
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