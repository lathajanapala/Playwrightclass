function reverseOrderrOfWords(str: string): string | null {
	if (!str) {
		return null;
	}
	return str.split(' ').map(word=>word.split('').reverse().join('')).join(' ');
}
console.log(reverseOrderrOfWords("I love playwright testing"))