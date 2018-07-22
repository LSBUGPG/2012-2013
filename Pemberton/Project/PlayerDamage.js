var gManager:GameManager;
var takenDame:boolean = false;

function OnTriggerEnter(hit:Collider)
{
	if (hit.gameObject.name == "Enemy")
	{
		takenDame=true;
		gManager.playerLives-=1;
	}

}

function OnTriggerExit()
{
		takenDame=false;
}

