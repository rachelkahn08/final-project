import React, { Component } from 'react';
import GalleryHandler from './GalleryHandler';

class CategoryPage extends Component {
  constructor(props) {
    super(props);

    this.categoryFormListener.bind(this);
  }

  componentDidMount () {

  }

  categoryFormListener() {
    
  }

  render() {

    return (
      <div className="CategoryPage">
        <h1> THIS IS A CATEGORY PAGE </h1>
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
