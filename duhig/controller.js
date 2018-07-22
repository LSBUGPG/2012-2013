var targetMarble : GameObject;
var blueMarble1 : GameObject;
var redMarble2 : GameObject;
var blueMarble2 : GameObject;
var redMarble3 : GameObject;
var blueMarble3 : GameObject;
var redMarble4 : GameObject;
var blueMarble4 : GameObject;
var redMarble5 : GameObject;
var blueMarble5 : GameObject;
var redMarble1 : GameObject;

var timer :float = 10;

var forceStrength = 9000000;
var applyForce = false;

var turnEnding : boolean = false;
var endOfTurnGUI : boolean = false;


function Update()
{
	transform.parent.transform.localPosition = targetMarble.transform.localPosition;
	if(turnEnding)
	
			{
			
		var temp: GameObject = blueMarble1;
		blueMarble1 = targetMarble;
		targetMarble = temp;	
		var temp2: GameObject = redMarble2;
		redMarble2 = targetMarble;
		blueMarble1 = temp2;
		var temp3: GameObject = blueMarble2;
		blueMarble2 = targetMarble;
		redMarble2 = temp3;
		var temp4: GameObject = redMarble3;
		redMarble3 = targetMarble;
		blueMarble2 = temp4;
		var temp5: GameObject = blueMarble3;
		blueMarble3 = targetMarble;
		redMarble3 = temp5;
		var temp6: GameObject = redMarble4;
		redMarble4 = targetMarble;
		blueMarble3 = temp6;
		var temp7: GameObject = blueMarble4;
		blueMarble4 = targetMarble;
		redMarble4 = temp7;
		var temp8: GameObject = redMarble5;
		redMarble5 = targetMarble;
		blueMarble4 = temp8;
		var temp9: GameObject = blueMarble5;
		blueMarble5 = targetMarble;
		redMarble5 = temp9;
		var temp10: GameObject = redMarble1;
		redMarble1 = targetMarble;
		blueMarble5 = temp10;
	
				
			}
	
	
	
	
	
	
	if(Input.GetKey(KeyCode.W))
	{
		targetMarble.rigidbody.AddForce(Camera.main.transform.forward * 350);
	}
	
	if(Input.GetAxis("Horizontal"))
	{
		var rotationAmount : float = Input.GetAxis("Horizontal");
		transform.parent.transform.localEulerAngles += Vector3(0,rotationAmount, 0);
	}
	
}

function FixedUpdate() {
    if (applyForce) {
        targetMarble.rigidbody.AddForce(Camera.main.transform.forward * forceStrength);
        applyForce = false;
    }
}

function OnGUI()
{
	if(endOfTurnGUI)
	{
		GUI.Label(Rect(400,300,300,50), "End of turn");
	}
}