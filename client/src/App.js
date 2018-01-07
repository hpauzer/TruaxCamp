import React, { Component } from 'react';
import './style/App.css';
import Header from './components/Header.js';
import Navbar from './components/Navbar.js';
import Panel from './components/Panel.js';
import Footer from './components/Footer.js';
// import Paypal from './components/Paypal.js';

class App extends Component {
  render() {
 return  (
    <div>
      <Header/>
      <Navbar/>
      <Panel/>
      {/* <Paypal/> */}
      <Footer/>
  </div>

 );


       `<div id="index-banner" class="parallax-container">
          <div class="section no-pad-bot">
            <div class="container">
              <br>
                <br>
                  <h1 class="header center teal-text text-lighten-2"></h1>
                  <div class="row center">
                    <h5 class="header col s12 light"></h5>
                  </div>
                  <div class="row right"></div>
                  <br>
                    <br></div>
                  </div>
                  <div class="parallax fit">
                    <img
                      class="responsive-img"
                      src="background1.jpg"
                      alt="Unsplashed background img 1"></div>
                  </div>



                </div>
              </div>

              <div class="parallax-container valign-wrapper">
                <div class="section no-pad-bot">
                  <div class="container">
                    <div class="row center">
                      <h5 class="header col s12 amber-text light">“Music gives a soul to the universe,
                        wings to the mind, flight to the imagination and life to everything.” ― Plato</h5>
                    </div>
                  </div>
                </div>
                <div class="parallax">
                  <img src="background2.jpg" alt="Unsplashed background img 2"></div>
                </div>

                <div class="container">
                  <div class="section">

                    <div class="row">
                      <div class="col s12 center">
                        <h3>
                          <i class="mdi-content-send grey-text"></i>
                        </h3>
                        <a class="amber waves-effect waves-light btn">Donate</a>
  
                        <p class="grey-text left-align light">Truax School of Trumpet is a 501(c)3
                          organization. Your contributions fund scholarships that provide opportunities
                          for students to learn, listen and perform at camp and throughout the year.</p>
                      </div>
                    </div>

                  </div>
                </div>

                <div class="parallax-container valign-wrapper">
                  <div class="section no-pad-bot">
                    <div class="container">
                      <div class="row center">
                        <h5 class="header col s12 amber-text light">“Music can change the world because it can change people.”
                        </br>― Bono</h5>
                    </div>
                  </div>
                </div>
                <div class="parallax">
                  <img src="background3.jpg" alt="Unsplashed background img 3"></div>
                </div>

                <footer class="page-footer grey">
                  <div class="container">
                    <div class="row">
                      <div class="col l6 s12">
                        <h5 class="amber-text">Founder's Bio</h5>
                        <p class="white-text text-lighten-4">We are a team of college students working
                          on this project like it's our full time job. Any amount would help support and
                          continue development on this project and is greatly appreciated.</p>

                      </div class="grey">
                      <div class="col l3 s12 grey">
                        <h5 class="amber-text">Settings</h5>
                        <ul>
                          <li>
                            <a class="amber-text" href="#!">Link 1</a>
                          </li>
                          <li>
                            <a class="amber-text" href="#!">Link 2</a>
                          </li>
                          <li>
                            <a class="amber-text" href="#!">Link 3</a>
                          </li>
                          <li>
                            <a class="amber-text" href="#!">Link 4</a>
                          </li>
                        </ul>
                      </div>
                      <div class="col l3 s12 grey">
                        <h5 class="amber-text">Connect</h5>

                      </div>
                    </div>
                  </div>
                  <div class="footer-copyright">
                    <div class="container">
                      Made by
                      <a class="amber-text text-lighten-3" href="http://materializecss.com">Materialize</a>
                    </div>
                  </div>
                </footer>`
    
  }
}

export default App;
