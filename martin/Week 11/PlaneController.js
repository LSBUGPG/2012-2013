var target : Transform; //the enemy's target
var moveSpeed = 1; //move speed
var rotationSpeed = 2; //speed of turning
var health: int = 100;





var myTransform : Transform; //current transform data of this enemy

function Awake()
{
    myTransform = transform; //cache transform data for easy access/preformance
}


function Update () {


	target = GameObject.Find("plane1").transform; // this looks for the player. I changed the name of your FPS controller to player to make it easier to code

    myTransform.rotation = Quaternion.Slerp(myTransform.rotation,Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);
	// this makes sure that the enemy is always facing the player

    myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
    // this is simpley just movement over time.

    
    if (health <= 0)
    {
    	Destroy(this.gameObject);
    	// this shouldnt need any explaining.
    	print("destroyed");
    	
    }

}
function OnCollisionEnter(hit : Collision)
    {
    var hitArea = hit.contacts[0];
    var hitRotation = Quaternion.FromToRotation(Vector3.up, hitArea.normal);
    if(hit.gameObject.name == "missile")
        {
        	health -= 100;
        	//because you are naming every instanciated varible "missile" in your MissileLauncher.JS all missiles will collide with the planes.
       		
         }
    
     
     

    }
    
