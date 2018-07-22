var enemySpawn : Transform; 
var startTime : float;
var enemy : GameObject; //Your enemy prefab
var enemy2 : GameObject; //Your enemy prefab
var enemy3 : GameObject; //Your enemy prefab
var gManager:GameManager;
var spawnTime:int = 5;
var type2:boolean = false;
var type3:boolean = false;

function Update()
{
    if (gManager.playerPoints >= 500)
    {
    	type2=true;

    
    }
    
    
    if (gManager.playerPoints >= 1000)
    {
    	spawnTime = 4;
    	print("spawnTime INcreased");
    	type3=true;


    
    }
       if (gManager.playerPoints >= 3000)
    {
    	spawnTime = 3;
    	print("spawnTime INcreased");


    
    }
          if (gManager.playerPoints >= 5000)
    {
    	spawnTime = 2;
    	print("spawnTime INcreased");


    
    }


    
    
    if (startTime == 0) //New time
    {
        //startTime++;
        startTime = Time.time; //Set the current time
    }
    else
    {
        if ((Time.time - startTime) >= spawnTime) //Check if 120 seconds have passed
        {
            print("enemy spawned");
            startTime = 0; //Set the starttime back to 0
            
   			var enemyIns = Instantiate(enemy, enemySpawn.position, enemySpawn.rotation);
   			if (type2==true)
   			{
   			var enemyIns2 = Instantiate(enemy2, enemySpawn.position * 1 , enemySpawn.rotation);
   			enemyIns2.name = "Enemy";
   			}
   			if (type3==true)
   			{
   			var enemyIns3 = Instantiate(enemy3, enemySpawn.position, enemySpawn.rotation);
   			enemyIns3.name = "Enemy";
   			}
    
   		 	enemyIns.name = "Enemy";
        }
    }
}