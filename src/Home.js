import React, { Component } from 'react';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.fetchImages('gallery', 'GET');
	}

	render() {

		return(
			<div>
				
			</div>
		);
	}
}

//<Images images={ images }/>
// const GalleryControl = (context, images, category) => (
//   <Gallery context={ context } images={ images } category={ category } changeImages={() =/>
// )