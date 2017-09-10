import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Gallery from './Gallery';
import CategoryPage from './CategoryPage';

import {BrowserRouter, Switch, Route} from "react-router-dom";

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
            <Route path="/~michele.james/build/CategoryPage" component={ CategoryPage }
            <Route path="/~michele.james/build/CategoryPage" component={ CategoryPage } />
            <Route path="/~michele.james/build/ImageCollection" component={ ImageCollection } />
          </Switch>
         </div>
      </BrowserRouter>
    );
  }
}

export default App;

// <Route path="/~michele.james/build/CategoryPage" component={() => CategoryWrapper(this.state.images, this.state.category)/>

//<Route path="/~michele.james/build/" exact component={() => ImageCollectionWrapper(this.state.images)} />
//<Route path="/~michele.james/build/" exact component={() => ImageCollectionWrapper(this.state.images)} />
//<Route path="/~michele.james/build/image/:id" component={ImageDetail} />
//<Route path="/~michele.james/build/categories" component={CategoryPage} />
//<Route path="/~michele.james/build/" exact component={ App } />
//<Route path="/~michele.james/build/Login" component={ Login } />
//<Route path="/~michele.james/build/Register" component={ Register } />
//<Route path="/~michele.james/build/CategoryPage" component={ CategoryPage } />
//<Route path="/~michele.james/build/ImageCollection" component={ ImageCollection } />

//<Route path="/~michele.james/build/categories/cat" component={() => CategoryWrapper(this.state.images, "cat")} />
//<Route path="/~michele.james/build/categories/dog" component={() => CategoryWrapper(this.state.images, "dog")} />
