var movieObj = [
	{
		title: "Deadpool",
		rating: 5,
		hasWatched: true
	},
	{
		title: "The Outsider",
		rating: 4,
		hasWatched: false
	},
	{
		title: "Silicon Valley",
		rating: 4.5,
		hasWatched: true,
		episodes: ["Episode 1", "Episode 2", "Episode 3", 
		{
			title: "Episode 4 Part 1",
			type: "Special"
		}
		]
	}
]

for(var i = 0; i < movieObj.length; i++)
{
	if(movieObj[i].hasWatched === true)
	{
		console.log("You have watched \"" + movieObj[i].title + "\" - " + movieObj[i].rating + " stars");
	}
	else
	{
		console.log("You have not watched \"" + movieObj[i].title + "\" - " + movieObj[i].rating + " stars");
	}
}

var dog = {
	speak: function()
	{
		return "Woof";
	}
}

var comments = {};
comments.data = ["hey", "gg", "bg"];
comments.print = function(){
	this.data.forEach(function(i)
	{
		console.log(i);
	});
}

comments.print();
