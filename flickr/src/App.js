// All the imports
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Header from './component/Header'
import Search from './component/Search'
import PhotoContainer from './component/PhotoContainer';
import Nav from './component/Nav';
import Boondocks from './component/Boondocks';
import LooneyTunes from "./component/LooneyTunes"
import Graffiti from './component/Graffiti';
import apiKey from './Component/Config';
import NotFound from './component/NotFound';

// Storing the apiKey into a variable
const api = apiKey

// The top level of the component
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    }
  }

  // Search, fetch, load

  performSearch = search => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api}&text=${search}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        this.setState({
          photos: res.data.photos.photo,
          loading: false
        })
      })
      .catch(function (error) {
        console.log('Error fetching data from flickr', error);
      })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Search searchPhoto={this.performSearch} />
          <Nav />
          <Switch>
            <Route path="/search/:name" render={() => <PhotoContainer loading={this.state.loading} gallery={this.state.photos} />} />
            <Route exact path="/" render={() => <Boondocks searchFor="Boondocks" name="Boondocks" />} />
            <Route exact path="/Boondocks" render={() => <Boondocks searchFor="boondocks" name="boondocks" />} />
            <Route exact path="/LooneyTunes" render={() => <LooneyTunes searchFor="LooneyTunes" name="LooneyTunes" />} />
            <Route exact path="/Graffiti" render={() => <Graffiti searchFor="Graffiti" name="Graffiti" />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}