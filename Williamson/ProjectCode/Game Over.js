#pragma strict

var gameOver = false;
var timer : float = 0;


function Start () {

}

function Update () {

	if(gameOver)
	{
		timer += Time.deltaTime;
		
		if(timer < 1)
		{
			Camera.main.SendMessage("fadeOut");
		}
		else if(timer < 2)
		{
		

		}
		else if(timer < 4)
		{
			//leave GUI
		}
		else if(timer < 5)
		{
			//fade down GUI
		}
		else
		{
			gameOver = false;
			Application.LoadLevel(0);
			Camera.main.SendMessage("fadeIn");

			
		}
	
	}

}


function OnTriggerEnter(){

gameOver = true; 

}