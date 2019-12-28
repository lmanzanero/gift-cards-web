import React from 'react';
import AppNavbar from './components/AppNavbar' 

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import GiftCards from './components/GiftCards';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <GiftCards/>
      <Footer/>
    </div>
  );
}

export default App;
