// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str.split('').reverse().join('');
}



// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
	str = str.toLowerCase().replace(/\s/g, "");
	return str === str.split(' ').reverse().join('');
}

console.log(isPalindrome('A But Tuba'));

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
	return parseInt(int.toString().split('').reverse().join(''));
}

console.log(reverseInt(521));

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {

	str = str.split('');
	str[0] = str[0].toUpperCase();

	for(var i = 0; i<str.length; i++)
	{
		if(str[i] === " ")
		{
			str[i+1] = str[i+1].toUpperCase();

		}
	}
	return str.join('');
}

console.log(capitalizeLetters("i love javascript"));


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
	let temp = {};
	str = str.split('');

	for(var i = 0; i<str.length; i++)
	{
		if(!temp[str[i]])
		{
			temp[str[i]] = 1;
		}
		else
		{
			temp[str[i]] +=1;
			// dup.push(str[i]);
		}
	}
	delete temp[" "];
	return temp;
}

console.log(maxCharacter("This string G"));



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
	for(var i = 0; i<101;i++)
	{
		if(i % 5 == 0 && i % 3 == 0)
			console.log("Fizzbuzz");

		else if(i % 5 == 0)
			console.log("Buzz");

		else if(i % 3 == 0)
			console.log("Fizz");

		else
			console.log(i);
	}
}

fizzBuzz();

function fibonacci(n)
{
	let arr = [0, 1];
	let fibo = 0;

	for (let i = 0; i < n - 2; i++)
	{
		fibo = arr[i] + arr[i+1];
		arr.push(fibo);
	}
	return arr;
}
console.log(fibonacci(15));
// Call Function
const output = reverseString('hello');

console.log(output);