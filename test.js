function solution(str, ending){
	return ending.length == 0 ? true : str.slice(-ending.length) == ending
}

console.log(
	solution('abc', '')
)

