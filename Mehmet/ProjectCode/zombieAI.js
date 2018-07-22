var player : Transform;
var myTransform : Transform;
var health:int = 100;
static var score: int = 0;




function Awake()
{
    myTransform = transform; 
}
function Update()
{
	player = GameObject.Find("Player").transform;

    myTransform.rotation = Quaternion.Slerp(myTransform.rotation,Quaternion.LookRotation(player.position - myTransform.position), 5*Time.deltaTime);
    myTransform.position += myTransform.forward * 2 * Time.deltaTime;
	
	if (health<=0)
	{
		Destroy(this.gameObject);
	}
}

function OnCollisionEnter(collision : Collision)
    {
    if(collision.gameObject.name == "bullet")
        {
        		health -=10;
        		score +=10;
        		

        }
  
}

function OnGUI ()
{
	GUI.Label(Rect(100,100,10000,10000),"Score:" + score.ToString());

}


	
