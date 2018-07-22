var spawn : Transform;
var animatingDeath : boolean = false;
var timer : float = 0;



function Start () {

}

function Update () {

	if(animatingDeath)
	{
		timer += Time.deltaTime;
		
		if(timer < 1)
		{
			Camera.main.SendMessage("fadeOut");
		}
		else if(timer < 2)
		{
		

		}
		
		else
		{
			transform.position = spawn.position;
			animatingDeath = false;
			Camera.main.SendMessage("fadeIn");
			timer = 0;

			
		}
	
	}

}

function OnControllerColliderHit (hit : ControllerColliderHit)
{
	if (hit.transform.name == "Terrain")
	{
	print("COLLISION!!!!!!");

		 print("terrain got me");
   		animatingDeath = true; 	
        	
    }
}


//
 




