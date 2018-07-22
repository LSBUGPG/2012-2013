#pragma strict

function OnControllerColliderHit(hit : ControllerColliderHit)
{
	
	//print("Object Name: "+hit.gameObject.name);
	if(hit.gameObject.name == "Bridge_001")
	{
		Debug.Log("I hit the bridge");
		hit.rigidbody.freezeRotation = false;
		hit.rigidbody.useGravity = true;
	}
	
}