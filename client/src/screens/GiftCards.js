import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom'


export default class GiftCards extends Component {
  // state = {
  //   giftCards: [
  //     { id: uuid(), src: 'https://lh3.googleusercontent.com/7Rp8nh8n5Y3DdY-YM01O0gSDqa-BwKYlKGzwPMlBvFsOaaHYfVdQ4uJhs-AY_w07dZdsnTFz8XIYeBZ6w7RGfwJeVTt93ISin6rXHA=s0' },
  //     { id: uuid(), src: 'https://mk0avenuetjo4k1o6nk6.kinstacdn.com/wp-content/uploads/sites/26/2017/10/Amazon.com-gift-card.png' },
  //     { id: uuid(), src: 'https://lh3.googleusercontent.com/7Rp8nh8n5Y3DdY-YM01O0gSDqa-BwKYlKGzwPMlBvFsOaaHYfVdQ4uJhs-AY_w07dZdsnTFz8XIYeBZ6w7RGfwJeVTt93ISin6rXHA=s0' },
  //     { id: uuid(), src: 'https://lh3.googleusercontent.com/7Rp8nh8n5Y3DdY-YM01O0gSDqa-BwKYlKGzwPMlBvFsOaaHYfVdQ4uJhs-AY_w07dZdsnTFz8XIYeBZ6w7RGfwJeVTt93ISin6rXHA=s0' },
  //     { id: uuid(), src: 'https://lh3.googleusercontent.com/7Rp8nh8n5Y3DdY-YM01O0gSDqa-BwKYlKGzwPMlBvFsOaaHYfVdQ4uJhs-AY_w07dZdsnTFz8XIYeBZ6w7RGfwJeVTt93ISin6rXHA=s0' },
  //   ]
  // }

  // renderGiftCards = () => {
  //   const { giftCards } = this.state;
    
  //   giftCards.map(giftcard => {
  //     return (
  //       <div className="gift-cards-item">
  //         <img src={giftcard.src} alt="card"/>
  //       </div>
  //     );
  //   });
  //   console.log(giftCards)
  // }

  componentDidMount() {

  }

  render() {
    console.log(this.props.routes)
    return (
      <Container className="gift-cards-container" fluid={true}>
         <h4>Select a Gift Card</h4>
         <hr className="my-2" />
        <div className="gift-cards-items"> 
          <Link to="/gift-card/google-play-card">
            <div className="gift-cards-item">
              <img src="https://lh3.googleusercontent.com/7Rp8nh8n5Y3DdY-YM01O0gSDqa-BwKYlKGzwPMlBvFsOaaHYfVdQ4uJhs-AY_w07dZdsnTFz8XIYeBZ6w7RGfwJeVTt93ISin6rXHA=s0" alt="card"/>
            </div> 
          </Link>
          <div className="gift-cards-item">
            <img src="https://mk0avenuetjo4k1o6nk6.kinstacdn.com/wp-content/uploads/sites/26/2017/10/Amazon.com-gift-card.png" alt="card"/>
          </div>
        </div>
      </Container>
    );
  }
}