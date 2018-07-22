#pragma strict

var speed: float =20.0;
var rotateSpeed:float = 2.0;

function Update()
{
	var controller : CharacterController = GetComponent(CharacterController);
	transform.Rotate(0,Input.GetAxis("Horizontal") * rotateSpeed, 0);
	
	var forward : Vector3 = transform.TransformDirection(Vector3.forward);
	var curSpeed : float = speed*Input.GetAxis("Vertical");
	controller.SimpleMove(forward * curSpeed);

	var position = Input.mousePosition;
    position = Vector3(position.x,position.y,camera.main.transform.position.y- transform.position.y);
    var lastposition = camera.main.ScreenToWorldPoint(position);
    transform.LookAt(lastposition);
}
@script RequireComponent(CharacterController)