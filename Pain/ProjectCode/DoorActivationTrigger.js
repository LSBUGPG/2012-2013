var field : Transform;

function OnTriggerStay(col : Collider) 
{
	print ("Name of Triggering object: "+col.name);
    if (Input.GetKeyDown(KeyCode.Space)) 
    {
    	if(col.name == "forceField")
    	{
        	col.renderer.enabled = !col.renderer.enabled;
        	col.collider.enabled = !col.collider.enabled;
        }
    }
    
}
