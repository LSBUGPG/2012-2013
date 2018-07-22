var gameManager : GameManager;

function OnTriggerEnter (collision : Collider)
{
	if(collision.gameObject.name == "First Person Controller")
	{
		gameManager.currentHealth -=20;
		//Debug.Log ("IM TAKING DAMAGE AAARGH!!");
	}	
}


/*function OnControllerColliderHit (hit : ControllerColliderHit)
{
	if(hit.tag == "Player")
	{
		gameManager.currentHealth -=10;
		Debug.Log ("This is only a test");
	}
}
*/