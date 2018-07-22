#pragma strict

var target : Transform; //the enemy's target
var moveSpeed = 10; //move speed
var rotationSpeed = 10; //speed of turning
var respawn : GameObject;

var myTransform : Transform; //current transform data of this enemy
var controller : CharacterController;

function Awake()
{
    myTransform = transform; //cache transform data for easy access/preformance
    controller = GetComponent(CharacterController);
}

function Start()
{
     target = GameObject.FindWithTag("Player").transform; //target the player

}

function Update () {

	if(Vector3.Magnitude(target.transform.position - myTransform.position) > 10)
	{
		return;
	}
	
	var directionToMove : Vector3 = target.transform.position - transform.position;
	var directionToMoveNormal : Vector3 = Vector3.Normalize(directionToMove);
	transform.LookAt(target.transform);
	controller.Move(directionToMoveNormal / 100);


}

function OnTriggerEnter (hit : Collider)
{
	print("hit.gameObject.name"+hit.gameObject.name);
	if(hit.gameObject.name == "Player")
	{
		hit.transform.position = respawn.transform.position;
		hit.transform.rotation = respawn.transform.rotation;
	}
}