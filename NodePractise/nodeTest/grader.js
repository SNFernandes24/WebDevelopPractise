function average(arr)
{
    output = 0;
    for(let i = 0; i<arr.length; i++)
    {
        output += arr[i];
    }
    return Math.round(output/arr.length);
}

let scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));