import React, {Component} from 'react';

import {Link} from 'react-router-dom';

export default class Login extends Component {
	render(){
		
		return (
			<div>
				<form action="" method="POST">
					Email Address: <input type="text" name="emailInput"/><br />
					Password: <input type="password" name="passwordInput"/><br />
				 	<input type="submit" value="save"/>
				</form>
			</div>
				
		)
	}
}
