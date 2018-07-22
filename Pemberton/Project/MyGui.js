var gManager:GameManager;

var guiSkin:GUISkin;
var heart:Texture2D;
var gOTexture:Texture2D;
var hoHoHo:AudioClip;

var runTime: boolean = false;
var canReset: boolean = false;
var timer:float = 0;

function Start () {

}

function Update () {

	if (runTime==true)
	{
	timer += Time.deltaTime;
	}
	
	if (timer >= 0.4)
	{
		canReset= true;
	}

}

function OnGUI()
{
	GUI.skin = guiSkin;

	GUI.Label (Rect (0, 10, 1000, 2000),"Xmas Cheer: " + gManager.playerPoints);

	if (gManager.playerLives == 3)
	{
		GUI.Label (Rect (0, Screen.height - 100, 100, 100),heart);
		GUI.Label (Rect (110, Screen.height - 100, 100, 100),heart);
		GUI.Label (Rect (210, Screen.height - 100, 100, 100),heart);
	}
	if (gManager.playerLives == 2)
	{
		GUI.Label (Rect (0, Screen.height - 100, 100, 100),heart);
		GUI.Label (Rect (110, Screen.height - 100, 100, 100),heart);

	}
	
	if (gManager.playerLives == 1)
	{
		GUI.Label (Rect (0, Screen.height - 10, 100, 100),heart);
	
	}
	
	if (gManager.playerLives <= 0)
	{
		GUI.DrawTexture(Rect(0, 0, Screen.width, Screen.height), gOTexture);
		runTime = true;
		audio.PlayOneShot(hoHoHo);

	}
		if (canReset == true)
		{
			print("BUTTONMEUPBITCHES");
			if (GUI.Button( Rect(Screen.width / 2,Screen.height / 2,200,200) , "RESTART" ) )
			{
				canReset = false;
				Application.LoadLevel ("StartPage");
			
			}
				if (GUI.Button( Rect(Screen.width / 2 - 210 ,Screen.height / 2 ,200,200) , "Submit Score" ) )
			{
				canReset = false;
			
			}
		}


}