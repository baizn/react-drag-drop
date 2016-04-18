let knightPosition = [1, 7];
let observer = null;

function emitchange() {
	observer(knightPosition);
}

export function observe(obj) {
	// setInterval( () => receive([
	// 	Math.floor(Math.random() * 8),
	// 	Math.floor(Math.random() * 8)
	// ]), 500);
	if(observer) {
		throw new Error('Multiple observers not implemented.');
	}

	observer = obj;
	emitchange();
}

export function moveKnight(toX, toY) {
	knightPosition = [toX, toY];
	emitchange();
}

export function canMoveKnight(toX, toY) {
	const [x, y] = knightPosition;
	const dx = toX - x;
	const dy = toY - y;

	return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || 
		(Math.abs(dx) === 1 && Math.abs(dy) === 2);
}