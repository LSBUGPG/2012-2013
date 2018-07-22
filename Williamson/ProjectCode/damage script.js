#pragma strict

var hitPoints: int = 3; 
var enemyDamage:int = 1; 
var beenHit = false;
var timer : float;

var guiManager : NewGUIManager;


function Start () {

guiManager.healthText= "Lives: "+hitPoints.ToString();

}



function OnControllerColliderHit (hit : ControllerColliderHit)

{ 

	if (!beenHit)

	{

	if(hit.collider.gameObject.tag == "enemy") 
    	
    	{
       	 	
       	 	hitPoints -= enemyDamage;
       	 	guiManager.healthText= "Lives: "+hitPoints.ToString();
       		beenHit = true;
   	 	} 
   	 	
   	 	

	if (hitPoints <= 0)
    
   	 	{ 
			Application.LoadLevel(0);
   	 	} 
   	 
	} 
	
	
	//I have assigned the tag hitReset to the bridges bewtween the islands, which resets the beenHit variable to false. This means the player can only loose life per island.
	
	else if(hit.collider.gameObject.tag == "hitReset") 
    	
    	{
    	beenHit = false;
    	}
}

