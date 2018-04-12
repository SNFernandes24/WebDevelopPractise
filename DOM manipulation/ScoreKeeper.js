var p1Score = document.querySelector("#p1Score");
var p2Score = document.querySelector("#p2Score");
var maxScore = document.querySelector("#maxScore");
var gameOver = false;
var p1LocScore = 0;
var p2LocScore = 0;
var score = maxScore.textContent;

function onNumChange()
{
	maxScore.textContent = document.querySelector("input").value;
	if(maxScore.textContent < 0) maxScore.textContent = 1;
	else score = maxScore.textContent;

}

function p1Click()
{
	if(!gameOver)
	{
		p1LocScore++;
		p1Score.textContent = p1LocScore;
		if(p1LocScore == score) gameOver = true;
	}
	if(p1LocScore == score)
	{
		p1Score.style.color = "green";
		p2Score.style.color = "red";
	}
}

function p2Click()
{
	if(!gameOver)
	{
		p2LocScore++;
		p2Score.textContent = p2LocScore;
		if(p2LocScore == score) gameOver = true;
	}
	if(p2LocScore == score) 
		{
			p2Score.style.color = "green";
			p1Score.style.color = "red";
		}
}

function reset()
{
	gameOver = false;
	p1LocScore = 0;
	p2LocScore = 0;
	p1Score.textContent = 0; 
	p2Score.textContent = 0;
	p1Score.style.color = "black";
	p2Score.style.color = "black";
}

