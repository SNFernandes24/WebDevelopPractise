function isEven(num)
{
	 return num % 2 === 0;
}

console.log(isEven(4));

function factorial(num)
{
	if(num === 0) return 1;

	for(var i = num - 1; i >= 1; i--)
	{
		num *= i;
	}
	return num;
}

console.log(factorial(10));

function kebabToSnake(str)
{
	return str.replace(/-/g, "_");
}

console.log(kebabToSnake("dogs-are-awesome-hehe"));

var scopeNum = 8;

function doMath()
{
	scopeNum += 1;
	if(scopeNum % 5 == 0) return true;
	else return false;
}

scopeNum += 1;
console.log(doMath());

function printing()
{
	console.log("Hello");
	console.log("world");
}

//setInterval(printing, 500);