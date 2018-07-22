var crosshairTexture : Texture2D;


function Update () {
    Screen.showCursor = false;
}



function OnGUI()
{

	//GUI.DrawTexture(Rect(0, 0, 1920, 1080), screenTexture);
	
	   var mousePos = Event.current.mousePosition;

   // mousePos.x = Mathf.Clamp(mousePos.x, 300, 1200);
   // mousePos.y = Mathf.Clamp(mousePos.y, 150, 800);

    GUI.DrawTexture( Rect( mousePos.x - (crosshairTexture.width/2),
                           mousePos.y - (crosshairTexture.height/2),
                           crosshairTexture.width,
                           crosshairTexture.height), crosshairTexture);
	
	
	
}