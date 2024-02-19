function XO(str) {
	const xo = str.toLocaleLowerCase().split('')
	const x = xo.filter(element => element == 'x')
	const o = xo.filter(element => element == 'o')
	if (x.length == o.length || (!xo.includes('o') && !xo.includes('x'))) { return true } else { return false }
}
console.log('hi');
console.log('hello');
