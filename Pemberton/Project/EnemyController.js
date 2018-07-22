var target : Transform;
var moveSpeed = 6;
var rotationSpeed = 7;
var health: int = 100;
var isFlying: boolean = false;
var ding:AudioClip;

//Burning Vars
var isBurnt:boolean = false;
var burnTimer:float = 0;
var maxBurnTime:float = 0.10;


var myTransform : Transform;
var gameManager:GameManager;

function Awake()
{
    myTransform = transform; 
}



function Update () {

	gameManager.gameObject.name="Manager";
	target = GameObject.Find("Santa").transform;

    myTransform.rotation = Quaternion.Slerp(myTransform.rotation,Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);


    myTransform.position += myTransform.forward * moveSpeed * Time.deltaTime;
    if(isBurnt == true)
    {
    burnTimer += Time.deltaTime;
    moveSpeed = 2;
    }
    if (burnTimer >= maxBurnTime)
    {
    	isBurnt = false;
    }
    
    
    
    if (health <= 0)
    {
    	Destroy(this.gameObject);
    }
    
      if (gameManager.playerPoints == 0)
    {
    	moveSpeed = 6;
    }
    
    if (gameManager.playerPoints >=5000)
    {
    	moveSpeed = 8;
    }
      if (gameManager.playerPoints >=10000)
    {
    	moveSpeed = 11;
    }
    
        if (gameManager.playerPoints >=15000)
    {
    	moveSpeed = 16;
    }
    
       if (gameManager.playerPoints >=20000)
    {
    	moveSpeed = 21;
    }
    



}
function OnCollisionEnter(collision : Collision)
    {
    var hitArea = collision.contacts[0];
    var hitRotation = Quaternion.FromToRotation(Vector3.up, hitArea.normal);
    if(collision.gameObject.name == "bullet")
        {
        	gameManager.playerPoints += 10;
        	health -= 20;

       
        }
            if(collision.gameObject.name == "flame")
        {
        	isBurnt = true;
        	health -= 20;
        	audio.PlayOneShot(ding);

       
        }
     

    }