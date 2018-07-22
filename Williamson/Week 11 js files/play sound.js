#pragma strict

function Start () {

}

function Update () {

}

private var triggered = false; 
var Trigger : AudioClip;

function OnTriggerEnter() 
	{ 
	if (triggered) return; 
	audio.PlayOneShot(Trigger); 
	triggered = true; 
	}