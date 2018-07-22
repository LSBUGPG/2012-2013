//var chest : GameObject;
var onTrigger:boolean = false;


function OnTriggerEnter (hit:Collider)
{
	if(hit.gameObject.name == "Player"){
	onTrigger = true;
	}
}

function OntriggerExit ()
{
	onTrigger = false;


}
function Update ()
{
	if (onTrigger == true && Input.GetKeyDown(KeyCode.Space))	
	{
		
			print("Yo! Where My Animations AT Bitches!");
    		animation.Play("Take001");
		
	}


}