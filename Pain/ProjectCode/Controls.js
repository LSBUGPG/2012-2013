#pragma strict
/*
var marker : GameObject;
var characterController : CharacterController;
var target : Transform;
var distance = 10.0;


var xSpeed = 250.0;
var ySpeed = 120.0;

var yMinLimit = -20;
var yMaxLimit = 80;

private var xkey = 0.0;
private var ykey = 0.0;


private var x : float;


function Start () {
	var angles = transform.eulerAngles;
    xkey = angles.y;
    ykey = angles.x;

	// Make the rigid body not change rotation
   	if (rigidbody)
		rigidbody.freezeRotation = true;

}

function Update (col : Collider)
{
		var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		var hit : RaycastHit;
		
		if (Input.GetMouseButtonDown(0)) 
		{
			if (Physics.Raycast (ray, hit, Mathf.Infinity)) {
				marker.transform.position = hit.point;
			}
		}
		if(marker != null)
		{
		    var moveVector : Vector3 = marker.transform.position - characterController.gameObject.transform.position;
		    var normalisedMove : Vector3 = Vector3.Normalize(moveVector);
		    characterController.Move(normalisedMove * Time.deltaTime*3);  
		}
}


function LateUpdate () {
    if (target) {
    	xkey += Input.GetAxis("Horizontal") * xSpeed * 0.01;
		//ykey -= Input.GetAxis("Vertical") * ySpeed * 0.02;
 		
 		ykey = ClampAngle(ykey, yMinLimit, yMaxLimit);
 		       
        var rotation = Quaternion.Euler(ykey, xkey, 0);
        var position = rotation * Vector3(0.0, 0.0, -distance) + target.position;
        
        transform.rotation = rotation;
        transform.position = position;
    }
}

static function ClampAngle (angle : float, min : float, max : float) {
	if (angle < -360)
		angle += 360;
	if (angle > 360)
		angle -= 360;
	return Mathf.Clamp (angle, min, max);
}
*/












   /* if(currentHealth < 0) {
    //   currentHealth = 0;
   // }
   // if(currentHealth > maxHealth) {
    //   currentHealth = 0;
   // }
   // if(maxHeath < 1) {
       maxHealth = 1;
    }
    if(currentHealth < 0) {
       Application.LoadLevel ("Gameover");
    }
*/

/*if (Input.GetMouseButton(0))
	{
		movePoint = RayCastLineTest(playerCurrentPos);
		GetDistance(player);
		playerCurrentPos = player.transform.position;
	}






var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
var playerRotateSpeed = 10;

    var hitdist = 0.0;
    var targetPoint = ray.GetPoint(hitdist);

    var lookPos = targetPoint - transform.position;
    lookPos.y = 0;
    var targetRotation = Quaternion.LookRotation(lookPos); 
    transform.rotation = Quaternion.Slerp(transform.rotation, targetRotation, playerRotateSpeed * Time.deltaTime);

    var directionVector = new Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));

    if (directionVector != Vector3.zero) {
       var directionLength = directionVector.magnitude;
       directionVector = directionVector / directionLength;

       directionLength = Mathf.Min(1, directionLength);

       directionLength = directionLength * directionLength;

       directionVector = directionVector * directionLength;
    }
    
function ScreenPointToRay (position : Vector3) : Ray
{
	
}
*/


/*print (maxHealth);
	
	if(currentHealth < 0) 
	{
       currentHealth = 0;
    }
    if(currentHealth > maxHealth)
    {
       currentHealth = 0;
    }
    if(maxHealth < 1) 
    {
       maxHealth = 1;
    }
    */
/*function LookAtIgnoreHeight(target : Transform)
{
	var LookAt : Vector3 = target.position;
	LookAt.y = transform.position.y;
	transform.LookAt(target);
}
*/