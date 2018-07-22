var target : Transform; //the enemy's target
//var moveSpeed = 2; //move speed
var rotationSpeed = 2; //speed of turning

var myTransform : Transform; //current transform data of this enemy
var spawner:Transform;

var timer : float = 0;

var bulletSpawnPoint : GameObject;
var thePrefab : GameObject;


function Awake()
{
    myTransform = transform; //cache transform data for easy access/preformance
}

function Start()
{
     target = GameObject.FindWithTag("Respawn").transform; //target the player

}

function Update () {

	if(spawner == null)
	{
		return;
	}
	
	var directionToTarget : Vector3 = target.position - myTransform.position;

	if(directionToTarget == null || directionToTarget.magnitude > 5)
	{
		return;
	}
	
    //rotate to look at the player
    myTransform.rotation = Quaternion.Slerp(myTransform.rotation, Quaternion.LookRotation(directionToTarget), rotationSpeed*Time.deltaTime);

	if(timer > 1)
	{
		//spawn bullet
		var instance : GameObject = Instantiate(thePrefab, spawner.position, spawner.rotation);
		instance.rigidbody.AddForce(spawner.forward * 1000);
		timer = 0;
		instance.name = "bullet1";	

		//make bullet move
		
		//reset timer
	}
	timer += Time.deltaTime;
}


