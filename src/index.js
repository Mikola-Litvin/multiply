module.exports = function multiply(first, second) {
	let result = new Array();
	resultLength = first.length + second.length;
	while (resultLength > 0) {
		result.push(0);
		resultLength--;
	}
	first = first.split('').reverse();
	second = second.split('').reverse();
	first.forEach((item, index) => {abc(item, index)});
	function abc(item, index) {
		let denary = 0;
		second.forEach((item2, index2) => {
			result[result.length - index - index2 - 1] += denary + item * item2;
			denary = Math.floor(result[result.length - index - index2 - 1] / 10);
			result[result.length - index - index2 - 1] %= 10;
		});
		result[first.length - index - 1] = denary;
	}
	return result = result.join('').replace(/^0/, '');
}