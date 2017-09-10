import React, { Component } from 'react';
import Gallery from './Gallery';

export default class GallerySwitch extends Component {
	constructor(props) {
		super(props);

		this.mountImages.bind(this);
		this.fetchImages.bind(this);
		this.narrowImages.bind(this);
		this.changeImages.bind(this);

		this.state = {
			images: {};
		}
	}

	componentDidMount() {
		
	}

	fetchImages(type, direction, queryInputs) {

		let url = 'http://circuslabs.net/~michele.james/build/php/handle_php.php?type=' + type;
		
		var stringifyInputs = Object.entries(queryInputs);

		for (var i = stringifyInputs.length - 1; i >= 0; i--) {
			if (i  )
			url += (stringifyInputs[i][0] + '=' + stringifyInputs[i][1]);
		}

		fetch(url, {
			method: direction,
			headers: {
				'Content-Type': 'application/json'
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

