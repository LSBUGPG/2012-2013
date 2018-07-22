#pragma strict

var currentHealth : int = 100;
var damage : int = 50;
var team : String = "blue";

var controllerScript : controller;

function OnTriggerEnter(col: Collider){
    if (col.tag == "blue marble 1"){
    }
}

function Update () {

	if(currentHealth <= 0)
	{
		Destroy(this.gameObject);
	}

}

function OnCollisionEnter(thing : Collision)
{
	var hitObjectsHealthScript : health = thing.collider.gameObject.GetComponent(health);
	if(team != hitObjectsHealthScript.team)
	{
		if(thing.collider.name == controllerScript.targetMarble.name)
		{
			var damageDone = Mathf.Clamp(10,25, thing.relativeVelocity.magnitude);
			currentHealth -= damageDone;
			
			controllerScript.turnEnding = true;
		}
	}
}