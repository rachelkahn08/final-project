import React, { Component } from 'react';

class CategoryPage extends Component {
  constructor(props) {
    super(props);

    this.categoryFormListener.bind(this);

    this.state = {
      key: '',
    }
  }

  

  render() {
    const KEY = this.state.key;
    const getImages = this.props.galleryHandler('GET', KEY);
    return (
      <div className="CategoryPage">
        <h1> THIS IS A CATEGORY PAGE </h1>
          <select className="CategoryForm">
            <option value="value1">Value 1</option>
            <option value="value2">Value 2</option>
            <option value="value3">Value 3</option>
            <option value="value4">Value 4</option>
          </select>
      </div>
    );
  }
}

export default CategoryPage;

//queryInputs={ this.state.queryInputs }
