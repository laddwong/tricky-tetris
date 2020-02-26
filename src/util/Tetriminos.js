export const Tetriminos = function (centerPosition, type) {
	let x = centerPosition.row
	let y = centerPosition.col
	this.type = type
	this.brick = []
	this[type + 'Init'](x, y)
}

/* 方形 */
Tetriminos.prototype.OInit = function (x, y) {
	this.brick = [[x, y], [x, y + 1], [x + 1, y], [x + 1, y + 1]]
}

/* 直线 */
Tetriminos.prototype.IInit = function (x, y) {
	this.brick = [[x, y], [x, y - 1], [x, y + 1], [x, y + 2]]
}

/* J形状 */
Tetriminos.prototype.JInit = function (x, y) {
	this.brick = [[x, y], [x, y - 1], [x, y + 1], [x + 1, y - 1]]
}

/* L形 */
Tetriminos.prototype.LInit = function (x, y) {
	this.brick = [[x, y], [x, y - 1], [x, y + 1], [x + 1, y + 1]]
}

/* S形 */
Tetriminos.prototype.SInit = function (x, y) {
	this.brick = [[x, y], [x, y - 1], [x - 1, y], [x - 1, y + 1]]
}

/* Z形 */
Tetriminos.prototype.ZInit = function (x, y) {
	this.brick = [[x, y], [x, y + 1], [x - 1, y], [x - 1, y - 1]]
}

Tetriminos.prototype.TInit = function (x, y) {
	this.brick = [[x, y], [x, y - 1], [x, y + 1], [x - 1, y]]
}

export const TETRIMINOS_TYPE = ['O', 'I', 'J', 'L', 'S', 'Z', 'T']