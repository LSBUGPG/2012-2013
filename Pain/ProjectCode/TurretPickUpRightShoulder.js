var SpawnTurret : Transform; //attach object to the character
var Turret : Transform; //what you are picking up
var dist = 2; //distance at which you can pick up the turret
private var isHolding = false;

var turretHead : Transform;
var turretBase : Transform;


function Update ()
{
	if(Input.GetKeyDown(KeyCode.E))
	{
		if(Vector3.Distance(transform.position, SpawnTurret.position) < dist) 
        {
            isHolding = !isHolding;
             //print ("dist1 "+Turret.transform.position.y);
            	if(isHolding == true)
            	{
			        turretHead.collider.enabled = false; 
			        turretBase.collider.enabled = false;
			        Turret.parent = SpawnTurret; 
			        Turret.transform.position = SpawnTurret.transform.position; 
			        Turret.transform.rotation = SpawnTurret.transform.rotation; 
		        
		        	//print ("dist2 "+Turret.transform.position.y);
		   		}
		    else
		    { 
		        SpawnTurret.transform.DetachChildren(); 
		        turretHead.collider.enabled = true; 
		        turretBase.collider.enabled = true;
		     	Turret.position -= Vector3(0,1.27869,0);
		     	Turret.eulerAngles = Vector3.zero;
		    }
        }
	}
}