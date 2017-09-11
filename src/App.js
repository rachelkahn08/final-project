import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Sidebar from "./Sidebar";
import Login from './Login';
import Register from './Register';
import CategoryPage from "./CategoryPage";
import GalleryHandler from './GalleryHandler';


const HomePage = (fetchImages) => (
  <GalleryHandler fetchImages={ fetchImages }/>
);

export default class App extends Component {

  constructor (props) {
    super(props);

    this.galleryHandler.bind(this);
  }

  galleryHandler(direction, KEY) {
    let url = 'http://circuslabs.net/~michele.james/build/php/handle_fetch.php?type=' + KEY;

    fetch(url, {
      method: direction,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        }
      }).then( response => response.json() 
      ).then( json => {
          return ( JSON.parse(json) );
      });
  }

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Sidebar/>
          <Switch className="App__body">
            <Route path="/~michele.james/build" exact component={() => HomePage(this.fetchImages) } />
            <Route path="/~michele.james/build/LoginPage" component={ Login }/>
            <Route path="/~michele.james/build/RegisterPage" component={ Register }/>
            <Route path="/~michele.james/build/CategoryPage" component={ CategoryPage } fetchImages={ this.galleryHandler }/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
