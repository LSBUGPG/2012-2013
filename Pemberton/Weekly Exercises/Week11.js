#pragma strict
var spinner: int = 0;


function Start () {


}

function Update () {



	if (Input.GetMouseButtonDown(0))
	{
		spinner = 50;
		this.gameObject.transform.Rotate(spinner,0,0);

	
	}
		if (!Input.GetMouseButtonDown(0))
	{

		this.gameObject.transform.Rotate(0,0,0);
		
	}

}