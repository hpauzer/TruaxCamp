import React, { Component } from 'react';
import './style/App.css';
import Navbar from './components/Navbar.js';
import Pic1 from './components/Pic1.js';
import Pic2 from './components/Pic2.js';
import Pic4 from './components/Pic4.js';
import Pic5 from './components/Pic5.js';
import PanelIcons from './components/Panel-icons.js';
import Footer from './components/Footer.js';
// import Paypal from './components/Paypal.js';

class App extends Component {
  render() {
 return  (
    <div>
  
      <Navbar/>
      <Pic1/>
      <PanelIcons/>
      <Pic2/>
      <Pic4/>
      <Pic5/>
      <Footer/>
  </div>

 );


       
  }
}

export default App;
