var health:int = 100;
var takenDamage:boolean = false;
var guiSkin:GUISkin;

function Update () {

	if (takenDamage == true)
	{
		health -= 1;
		print(health);
	}
	
	if(health <=0){

		Application.LoadLevel("TopDownShooter");
}




}

function OnGUI()
{
    GUI.HorizontalScrollbar(Rect (10,410,200,20), 0, health,0, 100);
}
