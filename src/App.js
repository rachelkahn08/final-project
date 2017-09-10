import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import CategoryPage from "./CategoryPage";
import ImageCollection from "./ImageCollection";
import ImageDetail from "./ImageDetail"; 
import Register from './Register';
import Login from './Login';

import {BrowserRouter, Switch, Route} from "react-router-dom";
import './_App.css';

const ImageCollectionWrapper = (images) => (
  <ImageCollection images={images} />
)

const CategoryWrapper = (images, category) => (
  <ImageCollection images={images} category={category} />
)


class App extends Component {

  constructor (probs) {
    super(probs);

    this.state = {
      images: [],
    }
  }

  componentDidMount () {
    fetch('http://circuslabs.net/~ryan.rodd/php/project16/api/?data=allimages')
      .then(response => {
        console.log("response", response);
        return response.json();
      })
      .then(data => {
        this.setState({
          images: data
      })
    })
  } 

  render() {
    return (

      <BrowserRouter>
        <div className="App">

          <Sidebar/>

          <div className="App-Main">
            <Switch>
              <Route path="/~michele.james/build/" exact component={() => ImageCollectionWrapper(this.state.images)} />
              <Route path="/~michele.james/build/image/:id" component={ImageDetail} />
              <Route path="/~michele.james/build/categories/cat" component={() => CategoryWrapper(this.state.images, "cat")} />
              <Route path="/~michele.james/build/categories/dog" component={() => CategoryWrapper(this.state.images, "dog")} />
              <Route path="/~michele.james/build/categories" component={CategoryPage} />
              <Route path="/~michele.james/build/Login" component={ Login } />
              <Route path="/~michele.james/build/Register" component={ Register } />
              <Route path="/~michele.james/build/CategoryPage" component={ CategoryPage } />
              <Route path="/~michele.james/build/ImageCollection" component={ ImageCollection } />
            </Switch>
          </div>

              <br />
              <br />
              <Register />
              <br />
              <br />
              <Login />
              <br />
              <br />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
