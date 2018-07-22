var target : Transform; //the enemy's target
var moveSpeed = 2; //move speed
var rotationSpeed = 7; //speed of turning
var health: int = 200;
var isFlying: boolean = false;
var ding:AudioClip;

//Burning Vars
var isBurnt:boolean = false;
var burnTimer:float = 0;
var maxBurnTime:float = 0.10;

var myTransform : Transform; //current transform data of this enemy
//var bloodParticleEmitter : GameObject;
var gameManager:GameManager;

function Awake()
{
    myTransform = transform; //cache transform data for easy access/preformance
}

function Start()
{
     //target = GameObject.Find("Santa").transform; //target the player
     
	
}

function Update () {

gameManager.gameObject.name="Manager";
target = GameObject.Find("Santa").transform;
    //rotate to look at the player
    myTransform.rotation = Quaternion.Slerp(myTransform.rotation,Quaternion.LookRotation(target.position - myTransform.position), rotationSpeed*Time.deltaTime);

    //move towards the player
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
    	moveSpeed = 2;
    }
     if (gameManager.playerPoints >=5000)
    {
    	moveSpeed = 3;
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
        	audio.PlayOneShot(ding);
        	//Instantiate(bloodParticleEmitter, hitArea.point, hitRotation);
       
        }
            if(collision.gameObject.name == "flame")
        {
        	isBurnt = true;
        	health -= 20;
        	audio.PlayOneShot(ding);
        	//Instantiate(bloodParticleEmitter, hitArea.point, hitRotation);
       
        }
     

    }