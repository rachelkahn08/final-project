import React, { Component } from 'react';
import Sidebar from "./Sidebar";
<<<<<<< HEAD
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import Gallery from './Gallery';
<<<<<<< HEAD
import Register from './Register';
import Login from './Login';
=======
import CategoryPage from "./CategoryPage";
import ImageCollection from "./ImageCollection";
import ImageDetail from "./ImageDetail"; 
import Login from './Login';
import Register from './Register';
import Uploader from './Uploader';

import {BrowserRouter, Switch, Route} from "react-router-dom";
import './_App.css';

const ImageCollectionWrapper = (images) => (
  <ImageCollection images={images} />
)

const CategoryWrapper = (images, category) => (
  <ImageCollection images={images} category={category} />
)
>>>>>>> parent of dc440e4... oh dear god
=======
import CategoryPage from './CategoryPage';

import {BrowserRouter, Switch, Route} from "react-router-dom";
>>>>>>> parent of 590a466... i just want


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
<<<<<<< HEAD
          <Switch>
            <Route path="/~michele.james/" exact component={() => Homepage} />
            <Route path="/~michele.james/build/LoginPage" component={ LoginPage } />
            <Route path="/~michele.james/build/RegisterPage" component={ RegisterPage } />
            <Route path="/~michele.james/build/CategoryPage" component={ CategoryPage }
            <Route path="/~michele.james/build/CategoryPage" component={ CategoryPage } />
            <Route path="/~michele.james/build/ImageCollection" component={ ImageCollection } />
          </Switch>
         </div>
=======

          <div className="App-Main">
            <Switch>
              <Route path="/~michele.james/build/" exact component={() => ImageCollectionWrapper(this.state.images)} />
              <Route path="/~michele.james/build/image/:id" component={ImageDetail} />
              <Route path="/~michele.james/build/categories/cat" component={() => CategoryWrapper(this.state.images, "cat")} />
              <Route path="/~michele.james/build/categories/dog" component={() => CategoryWrapper(this.state.images, "dog")} />
              <Route path="/~michele.james/build/categories" component={CategoryPage} />
              <Route path="/~michele.james/build/" exact component={ App } />
              <Route path="/~michele.james/build/Login" component={ Login } />
              <Route path="/~michele.james/build/Register" component={ Register } />
              <Route path="/~michele.james/build/Uploader" component={ Uploader } />
              <Route path="/~michele.james/build/CategoryPage" component={ CategoryPage } />
              <Route path="/~michele.james/build/ImageCollection" component={ ImageCollection } />
            </Switch>
          </div>

        </div>
>>>>>>> parent of dc440e4... oh dear god
      </BrowserRouter>
    );
  }
}

export default App;
<<<<<<< HEAD

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

<<<<<<< HEAD
=======
>>>>>>> parent of dc440e4... oh dear god
=======
//<Route path="/~michele.james/build/categories/cat" component={() => CategoryWrapper(this.state.images, "cat")} />
//<Route path="/~michele.james/build/categories/dog" component={() => CategoryWrapper(this.state.images, "dog")} />
>>>>>>> parent of 590a466... i just want
