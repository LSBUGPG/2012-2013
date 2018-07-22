var myTimer : float = 5.0;

function Update () {

	myTimer += Time.deltaTime;
	
	if(myTimer <= 0){
		Debug.Log("GAME OVER");
		
	}

}