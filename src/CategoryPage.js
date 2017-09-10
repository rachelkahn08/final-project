import React, { Component } from 'react';
import {Link} from "react-router-dom";
import GalleryHandler from './GalleryHandler';

class CategoryPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {

  }

  render() {

    return (
      <div className="CategoryPage">
          <select className="CategoryForm">
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
            <option value="value4">Value 4</option>
          </select>
        <GalleryHandler type='category' queryInputs={ this.state.queryInputs }/>
      </div>
    );
  }
}

export default CategoryPage;
