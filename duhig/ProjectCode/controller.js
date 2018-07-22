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

var marblesArray = new Array();
var marbleIndex : int = 11;

var timer :float = 0;

var forceStrength = 9000000;
var applyForce = false;

var turnEnding : boolean = false;
var endOfTurnGUI : boolean = false;

function Awake()
{
	targetMarble = marblesArray[marbleIndex];

	marblesArray.Add(blueMarble1);
	marblesArray.Add(redMarble2);
}

function Update()
{
	transform.parent.transform.localPosition = targetMarble.transform.localPosition;
	if(turnEnding)
	{
		if(targetMarble.rigidbody.velocity.magnitude < 0.3f)
		{
			//gui
			endOfTurnGUI = true;
			timer += Time.deltaTime;
			if(timer >= 2)
			{
				//change marble/player
				marbleIndex++;
				if(marbleIndex >= marblesArray.length)
				{
					marbleIndex = 11;
				}
				
				targetMarble = marblesArray[marbleIndex];
				turnEnding = false;
				endOfTurnGUI = false;
				timer = 2;
			}
		}
	
		return;
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