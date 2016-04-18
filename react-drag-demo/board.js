import React, { Component, PropTypes } from 'react';
import BoardSquare from './boardSquare';
import Knight from './knight';
import { moveKnight, canMoveKnight } from './game';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

//ES7
//@DragDropContext(HTML5Backend)
/*export default */class Board extends Component {
	static propTypes = {
		knightPosition: PropTypes.arrayOf(
			PropTypes.number.isRequired
		).isRequired
	}

	render() {
		const squares = [];
		for(let i = 0; i < 64; i++) {
			squares.push(this.renderSquare(i));
		}

		return (
			<div style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexWrap: 'wrap',
				display: '-webkit-flex'
			}}>
				{squares}
			</div>
		);
	}

	renderSquare(i) {
		const x = i % 8;
		const y = Math.floor(i / 8);
		const black = (x + y) % 2 === 1;
		const [knightX, knightY] = this.props.knightPosition;
		const piece = (x === knightX && y === knightY) ? <Knight /> : '';

		return (
			<div key={i} 
				style={{width: '12.5%', height: '12.5%'}}>
				<BoardSquare x={x} y={y}>
					{this.handleSquare(x, y)}
				</BoardSquare>
			</div>
		);
	}

	handleSquare(x, y) {
		const [knightX, knightY] = this.props.knightPosition;
		if(x === knightX && y === knightY) {
			return <Knight />
		}
	}
}

//ES6
export default DragDropContext(HTML5Backend)(Board);