import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './HomePage/HomePage'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Checkout from './checkout/Checkout'
import createHistory from '../history';
import ViewAll from './ViewAll/Viewall';
import { searchMovies } from '../action';
import SearchPage from '../components/SearchPage/SearchPage'


class App extends Component {

  render() {
    return (
      <Router history={createHistory}>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/viewall" exact component={ViewAll} />
          <Route path="/search/:id" exact component={SearchPage} />
          <Route path="/checkout" exact component={Checkout} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default connect(null, { searchMovies })(App)

