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
import GiftCards from './components/GiftCards';
import Footer from './components/Footer';
import GiftCard from './components/GiftCard';
import CheckOut from './components/CheckoutConfirmation';


function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
          <Switch>
            <Route exact path="/">
              <GiftCards/>
            </Route>
            <Route path="/gift-card/:id">
              <GiftCard/>
            </Route>
            <Route path="/check-out">
              <CheckOut/>
            </Route>
          </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
