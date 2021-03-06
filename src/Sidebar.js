import React, { Component } from 'react';
import { nav, NavLink } from 'react-router-dom';

class Sidebar extends Component {

  constructor (props) {
    super(props);

    //this.isLoggedIn.bind(this);

    this.state = {
      loggedInOption: './Login',
      loginLinkText: 'Log In',
    }
  }

  // isLoggedIn(loginState) {

  //   loginState = 'Login'

  //   loginState = './' + loginState;

  //   this.setState({ loggedInOption: loginState });

  // }

  render() {
    // const loggedInOption = this.state.loggedInOption;
    // const loginLinkText = this.state.loginLinkText;
   

    return (
      <div className="Sidebar">
        <figure className="logo"></figure>
        <nav className="NavLinkContainer">
          <NavLink className="NavLink" to="./" exact>Home</NavLink>
          <NavLink className="NavLink" to="./CategoryPage">Categories</NavLink>
          <NavLink className="NavLink" to="./ImageCollection">All Images</NavLink>
          <NavLink className="NavLink" to="./Uploader">Upload Images</NavLink>
          <NavLink className="NavLink" to="./Login" exact>Log In</NavLink>
        </nav>
      </div>
    );
  }
}

export default Sidebar;

 //<NavLink className="NavLink" to={ loggedInOption }>{ loginLinkText }</NavLink>
