// player vars
var playerSpeedX:int = 0;
var player:GameObject;
var playerMoving:boolean = false;
// bullet vars
var bulletSpeedY:int = 30;
var bulletPrefab:GameObject;
var isShooting: boolean = false;
var bulletSpawn: Transform; 



function Update () {

	if (Input.GetKeyDown(KeyCode.LeftArrow))
	{
		playerSpeedX -= 5;
	}
	
	if (Input.GetKeyDown(KeyCode.RightArrow))
	{
		playerSpeedX += 5;
	}
	
	if (Input.GetKeyDown(KeyCode.Space))
	{
		isShooting==true;
		Fire();	
	}
	
	if (playerMoving == true && isShooting == flase)
	{
		//gameObject.transform.position(Vector3.
	
	}




}
function Fire()

{

    var bulletIns = Instantiate(bulletPrefab, spawnSocket.position, spawnSocket.rotation);
    bulletIns.rigidbody.AddForce(spawnSocket.forward * 5000);
    //bulletIns.name = "bullet";

}