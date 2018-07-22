var isQuitButton = false;
var isPlayButton = false;
var isControlButton = false;
var isMenuButton = false;




function OnMouseEnter () 

{

renderer.material.color = Color.black;
 }
    
function OnMouseExit ()
     {
            renderer.material.color = Color.white;
            
         }
      
function OnMouseUp()
{
	//is it quit button
	if ( isQuitButton )
	{
		//quit the game
		Application.Quit();
	}
	
	
	
	if (isControlButton )
	{
			Application.LoadLevel(2);
			Screen.showCursor = true;


	}
	
	if (isPlayButton )
	{
			Application.LoadLevel(1);
			Screen.showCursor = false;

	}
	
	if (isMenuButton )
	{
			Application.LoadLevel(0);
			Screen.showCursor = false;

	}
	
	
}
	
	                               