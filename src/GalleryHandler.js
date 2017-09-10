import React, { Component } from 'react';
import Gallery from './Gallery';

export default class GalleryHandler extends Component {
	constructor(props) {
		super(props);

		this.fetchImages.bind(this);

		this.state = {
			type: 'gallery',
			direction: 'GET',
			queryInputs: '',
			returnedData: {},
		}
	}

	componentDidMount() {
		if (this.props.type) {
			this.setState({type: this.props.type});
		}

		if (this.props.direction) {
			this.setState({direction: this.props.direction});
		}

		if (this.props.queryInputs) {
			this.setState({queryInputs: this.props.queryInputs});
		}

		this.fetchImages(this.props.type, this.props.direction, this.props.queryInputs);
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
			this.setState({returnedData: json});
		});
	}

	render() {

		return(
			<div>
				<h1>THIS IS A GALLERY HANDLER WOO</h1>
				<Gallery />
			</div>
		);
	}
}
