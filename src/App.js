import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home.js';
import ContactUs from './pages/ContactUs/ContactUs';
import Works from './pages/Works';
import About from './pages/About/About';
import CaseStudies from './pages/CaseStudies'

// Loader
import Loader from './components/Loader/Loader';


class App extends Component {

  state = {
    fadeOut: ''
  }

  componentDidMount () {
    const ele = document.querySelector('.loader');
    if (ele) {
      setTimeout(() => {
        // fade out
        ele.classList.add('hide')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 1000)
      }, 1000);
    }
  }
  render() {
    
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={ContactUs} />
            <Route path="/work" exact component={Works} />
            <Route path="/about" exact component={About} />

            {/* External Links */}
            <Route path='/face' component={() => {
              window.location.href = 'https://www.facebook.com/Addicta.co';
              return null;
            }} />
            <Route path='/twitter' component={() => {
              window.location.href = 'https://twitter.com/AddictaCo';
              return null;
            }} />
            <Route path='/linked' component={() => {
              window.location.href = 'https://www.linkedin.com/company/addicta/';
              return null;
            }} />
            <Route path='/dribbble' component={() => {
              window.location.href = 'https://dribbble.com/Addicta';
              return null;
            }} />
            <Route path='/behance' component={() => {
              window.location.href = 'https://www.behance.net/addicta';
              return null;
            }} />
            <Route path="/work/:id" component={CaseStudies} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
