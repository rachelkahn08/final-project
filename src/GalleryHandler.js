import React, { Component } from 'react';
import Gallery from './Gallery';

export default class GalleryHandler extends Component {
	constructor(props) {
		super(props);

		this.state = ({ 
			direction: 'GET',
			KEY: 'gallery',
			galleryQuery: [],
		});
	}

	componentWillMount() {
		const galleryQuery = this.props.fetchImages(this.state.direction, this.state.KEY);
		const galleryQuery = this.props.galleryQuery;
		this.setState({galleryQuery: galleryQuery});
	}

	render() {
		return (
			this.state.galleryQuery.map(item => 
				<Gallery key={item.id} {...item}/>
			)			
		);
	}
}



