
var isShooting: boolean = false;
var bulletPrefab : GameObject; 
var flamerPre: GameObject;
var spawnSocket : Transform; 
var spawnSocket2 : Transform; 
var playShootingAnimation : boolean = false;
var zap:AudioClip;
var gManager:GameManager;

private var timer:float = 0;
var maxTimer: float = 0.01;


function Update () {



	if(Input.GetMouseButton(0) && timer >= maxTimer) 
	{
		isShooting = true;
		Fire();
		timer = 0;
		

	}
	else if(Input.GetMouseButton(0) == false )
	{
		
		playShootingAnimation = false;
		isShooting = false; 
		
	}
		if(Input.GetMouseButton(1) && timer >= maxTimer && gManager.playerPoints >= 5) 
	{
		isShooting = true;
		FireFlame();
		timer = 0;
		playShootingAnimation = true;
	}
	else if(Input.GetMouseButton(1) == false )
	{
		
		
		isShooting = false; 
		playShootingAnimation = false;
	}
	
	timer += Time.deltaTime;
	if (playShootingAnimation == true)
	{
	animation.Play("Take 001");
	}
	if (playShootingAnimation == false)
	{
	animation.Stop("Take 001");
	}

	
}

function Fire()

{

    var bulletIns = Instantiate(bulletPrefab, spawnSocket.position, spawnSocket.rotation);
    bulletIns.rigidbody.AddForce(spawnSocket.forward * 5000);
    bulletIns.name = "bullet";
    
     var bulletIns2 = Instantiate(bulletPrefab, spawnSocket2.position, spawnSocket2.rotation);
    bulletIns2.rigidbody.AddForce(spawnSocket2.forward * 5000);
    bulletIns2.name = "bullet";
    
    audio.PlayOneShot(zap);
    playShootingAnimation = true;
    	

}
function FireFlame()

{

    var falmeIns = Instantiate(flamerPre, spawnSocket.position, spawnSocket.rotation);
    falmeIns.rigidbody.AddForce(spawnSocket.forward * 5000);
    falmeIns.name = "flame";
    
     var falmeIns2 = Instantiate(flamerPre, spawnSocket2.position, spawnSocket2.rotation);
    falmeIns2.rigidbody.AddForce(spawnSocket2.forward * 5000);
    falmeIns2.name = "flame";
    playShootingAnimation = true;
    gManager.playerPoints -= 20;
    	


}

function OnCollisionEnter(collision : Collision)
    {
    var hitArea = collision.contacts[0];
    var hitRotation = Quaternion.FromToRotation(Vector3.up, hitArea.normal);
    if(collision.gameObject.name == "Enemy")
        {

        	Destroy(this.gameObject);
    
       
        }
     

    }

