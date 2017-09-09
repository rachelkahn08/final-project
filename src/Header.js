import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

class Header extends Component {

  constructor (probs) {
    super(probs);

    this.isLoggedIn.bind(this);

    this.state = {
    	loggedInOption: './CategoryPage',
    }
  }

  isLoggedIn(loginState) {

  	loginState = 'ImageDetail';

  	this.setState({ loggedInOption: loginState });

  }

  render() {
  	const loggedInOption = this.state.loggedInOption;

    return (
    	<header>
    		<nav>
    			<NavLink to="./CategoryPage" />
    			<NavLink to="./ImageCollection" />
    			<NavLink to={ loggedInOption } />
    		</nav>
    	</header>
    );
  }
}

export default Header;
