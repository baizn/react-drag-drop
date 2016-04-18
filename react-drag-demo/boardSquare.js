import React, { Component, PropTypes } from 'react';
import Square from './square';
import { canMoveKnight, moveKnight } from './game';
import { DropTarget } from 'react-dnd';

const squareTarget = {
	canDrop(props) {
		return canMoveKnight(props.x, props.y);
	},
	drop(props) {
		moveKnight(props.x, props.y);
	}
};

function collect(connect, monitor) {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	}
}

const ItemTypes = {
	KNIGHT: 'knight'
};

@DropTarget(ItemTypes.KNIGHT, squareTarget, collect)
export default class BoardSquare extends Component {
	static PropTypes = {
		x: PropTypes.number.isRequired,
		y: PropTypes.number.isRequired,
		isOver: PropTypes.bool.isRequired,
		canDrop: PropTypes.bool.isRequired
	};

	renderOverlay(color) {
		return <div style={{
				position: 'absolute',
				top: 0,
				left: 0,
				height: '100%',
				width: '100%',
				zIndex: 1,
				opacity: 0.5,
				backgroundColor: color
			}} />
	}

	render() {
		const { x, y, connectDropTarget, isOver, canDrop } = this.props;
		const black = (x + y) % 2 === 1;
		debugger
		return connectDropTarget(
			<div style={{
				position: 'relative',
				width: '100%',
				height: '100%'
			}}>
				<Square black={black}>
					{this.props.children}
				</Square>
				{isOver && !canDrop && this.renderOverlay('red')}
				{!isOver && canDrop && this.renderOverlay('yellow')}
				{isOver && canDrop && this.renderOverlay('green')}
			</div>
		);
	}
}