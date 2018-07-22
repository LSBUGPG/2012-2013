public var gManager: GameManager;

function OnTriggerEnter (other : Collider)
{
	gManager.maxHealth-- ;
	
}