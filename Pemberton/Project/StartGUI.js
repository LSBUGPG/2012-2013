var splash:Texture2D;
var h2Play:Texture2D;
var guiSkin:GUISkin;
var howToPlay:boolean = false;

function OnGUI () {

	GUI.skin = guiSkin;

	GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height),splash);
	GUI.Label(Rect(0,0,1000,1000),"Build Version: 1.0 (Alpha)");
	
	if (GUI.Button( Rect(Screen.width / 2,Screen.height / 2,200,200) , "START" ) )
			{
				Application.LoadLevel ("AwesomeSanta");
			}
	if (GUI.Button( Rect(Screen.width / 2 - 210,Screen.height / 2,200,200) , "How To Play" ) )
			{
				howToPlay = true;
			}
	if(howToPlay == true)
	{
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height),h2Play);
			if (GUI.Button( Rect(0,0,100,100) , "Back" ) )
			{
				howToPlay = false;
			}
	}

}

