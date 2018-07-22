#pragma strict

var scoreText = "Score: 0";
var healthText = "Lives: 3";

var needButton : boolean = false;
var buttonHint : Texture;

var timer : float;




function OnGUI(){
  
    GUI.Label (Rect (10, 10, 100, 20), scoreText);
    GUI.Label (Rect (10, 30, 100, 20), healthText);
    
    if(needButton)
	{	
    	GUI.DrawTexture(Rect(Screen.width/2 -150,500,350,100), buttonHint, ScaleMode.StretchToFill, true, 10.0f);
    	timer += Time.deltaTime;
	
		if(timer > 10)
		{
			//deactivate 
			needButton = false;
		}
	}

}

