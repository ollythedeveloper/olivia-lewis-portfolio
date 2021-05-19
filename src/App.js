import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <nav className="App__nav">
          <Nav />
        </nav>
        <main className="App__main">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </main>
        <footer className="App__footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
