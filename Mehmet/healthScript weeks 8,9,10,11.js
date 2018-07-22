var health:int = 100;
var takenDamage:boolean = false;
var guiSkin:GUISkin;
var gameOver: Texture2D;



function Update () {

	if (takenDamage == true)
	{
		health -= 1;
		print(health);
	}
	



}

function OnGUI()
{
    GUI.HorizontalScrollbar(Rect (10,410,200,20), 0, health,0, 100);
    
    	if(health <=0)
    	{

		GUI.DrawTexture(Rect(0,0,Screen.width,Screen.height), gameOver, ScaleMode.StretchToFill);
}

}