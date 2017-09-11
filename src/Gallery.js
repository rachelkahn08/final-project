import React, { Component } from 'react';

export default class Gallery extends Component {

	render() {

		return(		
				<div className="imageContainer" id={this.props.key}>
					<img className="image" backgroundImage={`url(${ this.props.imageLink })`}/>
					<div className="image__title">{ this.props.title}</div>
					<div> 
						<div className="image__score">{ this.props.image.score }</div>
						<div className="image__upload-date">{ this.props.image.date }</div>
					</div>
				</div>
		);
	}
}
