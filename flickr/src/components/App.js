import React, {Component, Fragment} from 'react';
import {BrowerRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import apiKey from './config'


import Header from './Header';
import Navigation from './Nav';
import Gallery from './Gallery';
import Loading from './Loading';
import NoResults from './NoResults';
import NotFound from './NotFound';

class App extends Component {


  state = {
    query:'',
    showResults: false,
    loading: false,
    searchPhotos: [],
    looneytunesPhotos: [],
    graffitiPhotos: [],
    boondocksPhotos: [],
  };

  key = apiKey;


  componentDidMount() {
    this.getPhotos('boondocks', 'boondocksPhotos');
    this.getPhotos('graffiti', 'graffitiPhotos');
    this.getPhotos('looneytunes', 'looneytunesPhotos');
    this.handleSearch();
  }


  getPhotos = () => {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&per_page=24&format=json&nojsoncallback=1`)
      .then(response =>{
        this.setState({
          [photos]: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log(error);
      })
  }
  handleSearch = (query) => {

    this.state({
      query,
      showResults: false,
      loading: true
    });
    if (query) {
      axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${text}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            showesults: response.data.photos.photo.length > 0,
            loading: false,
            searchPhotos: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
  render() {

    let componentToRender;
    if (this.state.loading) {
      componentToRender = <loading />;
    } else if (!this.state.showResults) {
      componentToRender = <NoResults />;
    } else {
      componentToRender = <Gallery data={this.state.seacrhPhotos} title={this.state.query} />;
    }
    return (
      <BrowerRouter>
          <Switch>
              {/* Handle '/' route */}
              <Route
                excat
                path = "/"
                render={ () => <Redriect to="/boondocks" /> }
              />
              {/* Handle '/boonbocks'route */}
              <Route
                exact
                path="/boonbocks"
                render={ () =>
                  <Fragment>
                      <Header search={this.handleSearch}/>
                      <div className="container">
                            <Gallery data={this.state.boondocksPhotos} title="boondocks"/>
                      </div>
                  </Fragment>
                }
              />
              {/* Handle '/looneytunes'route */}
              <Route
                exact
                path="/looneytunes"
                render={ () =>
                  <Fragment>
                      <Header search={this.handleSearch}/>
                      <div className="container">
                            <Gallery data={this.state.looneytunesPhotos} title="looneytunes"/>
                      </div>
                  </Fragment>
                }
              />
              {/* Handle '/graffiti'route */}
              <Route
                exact
                path="/graffiti"
                render={ () =>
                  <Fragment>
                      <Header search={this.handleSearch}/>
                      <div className="container">
                            <Gallery data={this.state.graffitiPhotos} title="graffiti"/>
                      </div>
                  </Fragment>
                }
              />
              {/* Handle '/search/query 'route */}
              <Route
                exact
                path={`/search/${this.state.query}`}
                render={ () =>
                  <Fragment>
                      <Header search={this.handleSearch}/>
                      <div className="container">
                            {componentToRender}
                      </div>
                  </Fragment>
                }
              />
              {/* Handle '/search'route */}
              <Route
                exact
                path="/search"
                render={ () =>
                      <Header search={this.handleSearch} /> }
              />
              {/* Handle 404 error */}
              <Route component={NotFound} />
          </Switch>
      </BrowerRouter>
      );
   }
}
export default App;
