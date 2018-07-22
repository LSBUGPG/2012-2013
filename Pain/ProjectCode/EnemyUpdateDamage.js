
var gameManager : GameManager;
var col : Collision;

function Update () 
{
	if(col.gameObject.name == "Player")
	{
		gameManager.currentHealth -=10;
		//Debug.Log ("HELOOOO");
	}	
}
//OnControllerColliderHit