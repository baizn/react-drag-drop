import React, { Component, PropTypes } from 'react';

export default class Square extends Component {
	//ES7
	static propTypes = {
		black: PropTypes.bool
	}
	render() {
		const { black } = this.props;
		const fill = black ? 'black' : 'white';
		const stroke = black ? 'white' : 'black';

		return (<div style={{ 
			backgroundColor: fill,
			color: stroke,
			width: '100%',
			height: '100px' 
		}}>
			{this.props.children}
		</div>)
	}
}

//ES6
// Square.propTypes = {
// 	black: PropTypes.bool
//}