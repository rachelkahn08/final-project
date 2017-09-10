import React, { Component } from 'react';

export default class Gallery extends Component {
	constructor(props) {
		super(props);

		this.fetchImages.bind(this);

		this.state = {
			type: 'gallery',
			direction: 'GET',
		}
	}

	componentDidMount() {
		
	}

	fetchImages(type, direction, queryInputs) {

		let url = 'http://circuslabs.net/~michele.james/build/php/handle_php.php?type=' + type;
		
		var stringifyInputs = Object.entries(queryInputs);

		for (var i = stringifyInputs.length - 1; i >= 0; i--) {
			url += '&' + (stringifyInputs[i][0] + '=' + stringifyInputs[i][1]);
		}

		fetch(url, {
			method: direction,
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			}
		}).then( response => response.json() )
		.then( json => {
			this.setState({images: json});
		});
	}

	render() {
		const images = this.state.images;

		return(
			<div>
				<Gallery images={ images }/>
			</div>
		);
	}
}

