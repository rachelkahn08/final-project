import React, { Component } from 'react';
import './App.css';

import {Link} from "react-router-dom";

class CategoryPage extends Component {

  // constructor (probs) {
  //   super(probs);
  // }

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

   	//const {images} = this.props;

    return (
      <div className = "image-detail">
      	IMAGE DETAIL
        <br/>
        <br/>
        <Link to={`/categories/cat`}>
          CAT<br/>
        </Link>

        <Link to={`/categories/dog`}>
          DOG<br/>
        </Link>


      </div>

    );
  }
}

export default CategoryPage;
