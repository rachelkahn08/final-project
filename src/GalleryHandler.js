import React, { Component } from 'react';
import Gallery from './Gallery';

export default class GalleryHandler extends Component {
	constructor(props) {
		super(props);

		this.fetchImages.bind(this);

		this.state = {
			type: 'gallery',
			direction: 'GET',
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

			let queryInputs = this.props.queryInputs;
				queryInputs = Object.entries(queryInputs);

				for (var i = queryInputs.length - 1; i >= 0; i--) {
					queryInputs += '&' + queryInputs[i][0] + '=' + queryInputs[i][1];
				}

			console.log(queryInputs);
			this.setState({queryInputs: queryInputs});
		}

		this.fetchImages(this.state.type, this.state.direction, this.state.queryInputs);
	}

	fetchImages(type, direction, queryInputs) {

		let url = 'http://circuslabs.net/~michele.james/build/php/handle_php.php?type=' + type;
		
		if (this.state.queryInputs) {
			url += queryInputs;
		}

		fetch(url, 
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
				<Gallery jsonData={ this.state.returnedData }/>
			</div>
		);
	}
}
