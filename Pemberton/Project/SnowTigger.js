

function OnTriggerEnter(other:Collider)
{
	if(other.gameObject.name == "Enemy")
	{
		Destroy(other.gameObject);
	}

}