import React, { Component } from 'react';


import Sidebar from "./Sidebar";
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import CategoryPage from "./CategoryPage";
import Gallery from './Gallery';

import {BrowserRouter, Switch, Route} from "react-router-dom";

const Homepage = () => (
  <Gallery type='gallery' direction='GET' />
);

export default class App extends Component {

  constructor (probs) {
    super(probs);

    this.state = {
      images: [],
    }
  }

  componentDidMount () {
   
  } 

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Sidebar/>
          <Switch>
            <Route path="/~michele.james/" exact component={() => Homepage} />
            <Route path="/~michele.james/build/LoginPage" component={ LoginPage } />
            <Route path="/~michele.james/build/RegisterPage" component={ RegisterPage } />
            <Route path="/~michele.james/build/CategoryPage" component={ CategoryPage } />
          </Switch>
         </div>
      </BrowserRouter>
    );
  }
}
