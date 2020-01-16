import React from 'react';
import AppNavbar from './components/AppNavbar' 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GiftCards from './screens/GiftCards';
import Footer from './components/Footer';
import GiftCard from './screens/GiftCard';
import CheckOut from './screens/CheckoutConfirmation';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL  + '/'}>
      <div className="App">
        <AppNavbar /> 
            <Route exact path="/">
              <GiftCards/>
            </Route>
            <Route path="/giftcard/:id">
              <GiftCard/>
            </Route>
            <Route path="/check-out" component={CheckOut}/> 
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
