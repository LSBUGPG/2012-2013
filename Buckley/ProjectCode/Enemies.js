#pragma strict

var target : Transform; //the enemy's target
var moveSpeed = 2; //move speed
var rotationSpeed = 2; //speed of turning
var enemyHP : float = 50;

var enemyPrefab : GameObject; //this is for the instantiate for loop
var enemyPlaceHolder : GameObject;

var myTransform : Transform; //current transform data of this enemy

function Awake()
{
    myTransform = transform; //cache transform data for easy access/preformance
}

function Start()
{
     target = GameObject.FindWithTag("Player").transform; //target the player
}

function Update () {

	
	// Calculate the direction from the player to this character
	var playerToCharacterDirection : Vector3 = (transform.position - target.position);
	
	if(playerToCharacterDirection.magnitude <= 6)
	{
	    //rotate to look at the player
	    myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
	    Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
	
	    //move towards the player
	    myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
	}
    
    if(enemyHP <= 0)
    {
    	Destroy(this.gameObject);
    }
    
}

function OnCollisionEnter(other : Collision)
{
	
	if(other.gameObject.tag == "bullet")
	{
		enemyHP -= 10;
	}
	
}