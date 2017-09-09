import React, { Component } from 'react';
import './App.css';

import Header from "./Header";
import Sidebar from "./Sidebar";
import CategoryPage from "./CategoryPage";
import ImageCollection from "./ImageCollection";
import ImageDetail from "./ImageDetail"; 
import Uploader from "./Uploader";

import {BrowserRouter, Switch, Route} from "react-router-dom";

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
          <Header/>

          <Sidebar/>

          <Uploader />

          <div className="App-Main">
            <Switch>
              <Route path="/" exact component={() => ImageCollectionWrapper(this.state.images)} />
              <Route path="/image/:id" component={ImageDetail} />
              <Route path="/categories/cat" component={() => CategoryWrapper(this.state.images, "cat")} />
              <Route path="/categories/dog" component={() => CategoryWrapper(this.state.images, "dog")} />
              <Route path="/categories" component={CategoryPage} />
              <Route path="/uploads" component={Uploader} />
            </Switch>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
