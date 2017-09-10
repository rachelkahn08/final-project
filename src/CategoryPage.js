import React, { Component } from 'react';
import Gallery from './Gallery';

export default class CategoryPage extends Component {
  constructor(props) {
    super(props);

    this.state = { 

    }
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
        <Gallery type='category' direction='GET' queryInputs={ this.state.queryInputs }/>
      </div>

    );
  }
}

