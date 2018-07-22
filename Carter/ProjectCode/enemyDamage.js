var healthReference:healthScript;
var triggerEnetered: boolean = false;

function OnTriggerEnter (hit:Collider)
{
	triggerEnetered = true;
	if(triggerEnetered == true){
	if (hit.gameObject.name == "Player")
	{
		healthReference.takenDamage = true;
	
	}
	}

}

function OnTriggerExit ()
{
	triggerEnetered = false;
	healthReference.takenDamage = false;

}