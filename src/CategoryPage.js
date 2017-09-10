import React, { Component } from 'react';
import {Link} from "react-router-dom";

class CategoryPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {

  }

  render() {

    return (
      <Gallery { queryParameters } />
    );
  }
}

export default CategoryPage;
