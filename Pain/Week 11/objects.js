function Start()
{
     target = GameObject.FindWithTag("Player").transform; //target the player
}

function Update () {

	
	// Calculate the direction from the player to this character
	var playerToCharacterDirection : Vector3 = (transform.position - target.position);
	
	if(playerToCharacterDirection.magnitude > 6)
	{
		return;
	}

    //rotate to look at the player
    myTransform.rotation = Quaternion.Slerp(myTransform.rotation,
    Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);

    //move towards the player
    myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
    if(enemyHP <= 0)
    {
    	Destroy(this.gameObject);
    }
    
}

function OnCollisionEnter(other : Collision)
{
	
	if(other.gameObject.name == "bullet")
	{
		enemyHP -= 10;
	}
	
}