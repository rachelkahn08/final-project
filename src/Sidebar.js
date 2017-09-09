import React, { Component } from 'react';
import './App.css';

import {Link} from "react-router-dom";

class Sidebar extends Component {

  // constructor (probs) {
  //   super(probs);
  // }



  render() {

    return (

      <div className = "sidebar"> 
      	I'M A SIDEBAR<br/>
			<Link to={`/categories`}>
				Categories Tab in Sidebar<br/>
			</Link>
      </div>

    );
  }
}

export default Sidebar;
