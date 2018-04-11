// push, pop, unshift(add to begining), shift(remove first), indexOf(arg), slice(start, finish)

var keyWord = "";
var arrayList = [];

// [1,2,3].forEach(function(el, i, arr) {
//   console.log(el, i, arr);
// });

function printReverse(array)
{
	if(array.constructor === Array)
	{
		for(var i = array.length - 1; i >= 0; i--)
		{
			console.log(array[i]);
		}
	}
}
function isUniform(array)
{
		var temp = array[0];
		for(var i = 1; i < array.length; i++)
		{
			if(array[i] !== temp) return false;
		}
		return true;
}
function sumArray(array)
{
	var temp = 0;
	array.forEach(function(i)
		{
			temp += i;
		});
	return temp;
}
function max(array)
{
	var temp = 0;
	array.forEach(function(i)
		{
			if(i > temp) temp = i;
		});
	return temp;
}

printReverse([1,2,3,4,5]);
console.log(isUniform([1, 2, 1]));
console.log(sumArray([2,-2,1,3]));
console.log(max([2,3,5,1,40]));

// window.setTimeout(function() 
// {
// 	while(keyWord !== "quit")
// 	{
// 		keyWord = prompt("What would you like to do?");
// 		if(keyWord === "new")
// 		{
// 			var newList = prompt("Enter a new entry for list:");

// 			arrayList.push(newList);
// 		}
// 		else if(keyWord === "list")
// 		{
// 			arrayList.forEach(function(arr, i)
// 			{
// 				console.log("*******************");
// 				console.log(i + ": " + arr);
// 			});
// 			console.log("*******************");
// 		}
// 		else if(keyWord === "delete")
// 		{
// 			var tempNum = prompt("Enter a index to delete");
// 			arrayList.splice(tempNum, 1);
// 		}
// 	}
// }, 500);