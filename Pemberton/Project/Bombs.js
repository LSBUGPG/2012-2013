var bomb:GameObject;
var santa:Transform;


function Update () {

	if (Input.GetKey(KeyCode.Space))
	{
		var bombIns = Instantiate(bomb, santa.position, santa.rotation);
	
	}

}