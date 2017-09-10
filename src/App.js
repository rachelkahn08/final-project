import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Sidebar from "./Sidebar";
import Login from './Login';
import Register from './Register';
import CategoryPage from "./CategoryPage";
import GalleryHandler from './GalleryHandler';


// const HomepageWrapper = () => (
//   <GalleryHandler />
// );

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
          <Switch className="App__body">
            <Route path="/~michele.james/build" exact component={ GalleryHandler } />
            <Route path="/~michele.james/build/LoginPage" component={ Login } />
            <Route path="/~michele.james/build/RegisterPage" component={ Register } />
            <Route path="/~michele.james/build/CategoryPage" component={ CategoryPage } />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
