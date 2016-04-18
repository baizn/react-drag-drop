import React from 'react';
import ReactDOM from 'react-dom';
import Main from './index';
// import { observe } from './game';

const container = document.getElementById('container');

// observe(knightPosition =>
// 	ReactDOM.render(
// 		<Main knightPosition={[1, 7]} />,
// 		container
// 	)
// );
ReactDOM.render(
	<Main />,
	container
)
