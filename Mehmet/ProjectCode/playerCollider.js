var healthReference:healthScript;

var beenHit:boolean = false;

function OnTriggerEnter(hit:Collider)
{
	if (hit.gameObject.name == "Zombie")
	{
		healthReference.takenDamage = true;
		beenHit=true;
	}

}

function OnTriggerExit()
{
		beenHit=false;
		healthReference.takenDamage = false;
}
