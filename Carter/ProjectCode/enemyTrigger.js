#pragma strict

var clip : AnimationClip; 
var VelociTrigger : GameObject;

function Start () {

}

function OnTriggerEnter () {

	print("Starting Raptor animation");
	animation.Play ("Take 001");
	Destroy(VelociTrigger);

}