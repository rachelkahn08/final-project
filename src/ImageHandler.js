import React, { Component } from 'react';

export default class ImageHandler extends Component {
	constructor(props) {
		super(props);

		this.setState({ 
			direction: this.props.direction,
			KEY: this.props.KEY,
		});
	}

	componentWillMount() {
		const galleryQuery = this.props.fetchImages(this.state.direction, this.state.KEY);
		this.setState({galleryQuery: galleryQuery});
	}

	render() {
		return (
			<div className="gallery">
				{ this.state.galleryQuery.map(image => 
					<div className="imageContainer">
						<img className="image" backgroundImage=`url(${ image.imageLink })`/>
						<div className="image__title">{image.title}</div>
						<div>
							<div className="image__score">{image.score}</div>
							<div className="image__upload-date">{image.date}</div>
						</div>
					</div> )}
			</div>

		);
	}
}