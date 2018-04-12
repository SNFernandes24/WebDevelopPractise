var colButton = document.querySelector("button");
var bisColor = false;
var lis = document.querySelectorAll("li");

colButton.addEventListener("click", function()
	{
		if(bisColor)
		{
			document.querySelector("body").style.background = "green";
			bisColor = false;
		}
		else
		{
			document.querySelector("body").style.background = "red";
			bisColor = true;
		}

		//document.querySelector("body").classList.toggle("ColorChanger");	
	});

for(var i = 0; i < lis.length; i++)
{
	lis[i].addEventListener("mouseover", function()
		{
			this.classList.add("selected");
		});

	lis[i].addEventListener("mouseout", function()
	{
		this.classList.remove("selected");
	});

	lis[i].addEventListener("click", function()
	{
		this.classList.toggle("done");
	});
}