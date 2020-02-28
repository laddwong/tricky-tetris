/* 输入数组，深复制出一个数组
 * @param sourceArr {Array}
 * @return {Array}
 */
export function deepCopy (sourceArr) {
	let newArr = []
	for (let i = 0; i < sourceArr.length; i++) {
		if (Array.isArray(sourceArr[i])) {
			newArr[i] = deepCopy(sourceArr[i])
		} else {
			newArr[i] = sourceArr[i]
		}
	}
	return newArr
}

/* 输入行数和列数，返回一个相应行列数的零矩阵（数组）
 * @param rowAndCol {Object} 例：{row: 20, col: 12}
 * @return {Array}
 */
export function getMatrix (rowAndCol) {
	let matrix = []
	for(let i = 0; i < rowAndCol.row; i++) {
    matrix.push(new Array(rowAndCol.col).fill(0))
  }
  return matrix
}

/* 随机输出一种砖块类型 
 * @return {String} 例： 'I'
 */
import { TETRIMINOS_TYPE } from './Tetriminos.js'
export function randomType () {
	return TETRIMINOS_TYPE[Math.floor(Math.random() * TETRIMINOS_TYPE.length)]
}

/* 判断是否属于移动端
 * @return {Boolean}
 */
 export function isMobile () {
  return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
 }