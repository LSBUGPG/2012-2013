#pragma strict

//My script for the buttons to play anim and do an action.

var bridge002 : GameObject;

function OnCollisionEnter(collision:Collision)
{

    if(collision.gameObject.CompareTag("Button"))
    {
//Play animation
}
 animation.Play("button001anim");
 bridge002.rigidbody.useGravity = true;
 
}