import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Gallery from './Gallery';
import Register from './Register';
import Login from './Login';

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Homepage = () => (
  <Gallery />
);
  
class App extends Component {

  constructor (probs) {
    super(probs);

    this.state = {
      images: [],
      category: '',
    }
  }

  

  render() {

    return (
      <BrowserRouter className="App__body">
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

export default App;


