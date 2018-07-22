var enemySpawn : Transform; 
var startTime : float;
var enemy : GameObject; //enemy prefab
var spawnTime:int = 5;


function Update()
{
   
    
    if (startTime == 0) //New time
    {
        startTime = Time.time; //Set the current time
    }
    else
    {
        if ((Time.time - startTime) >= spawnTime) //Check if 120 seconds have passed
        {
            print("enemy spawned");
            startTime = 0; //Set the start time back to 0
   			var enemyIns = Instantiate(enemy, enemySpawn.position, enemySpawn.rotation);
   		 	enemyIns.name = "Enemy";
        }
    }
}