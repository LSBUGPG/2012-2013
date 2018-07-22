var enemyPrefab: Transform;
var maxEnemiesAlive: int = 2;
var maxEnemies: int = 10;
private var totalEnemies: int;
private var spawnPoints: GameObject[];
private var player: Transform;

function Start(){
  spawnPoints = GameObject.FindGameObjectsWithTag("Respawn");
  player = GameObject.FindWithTag("Player").transform;
  totalEnemies = maxEnemies; 
}

function Update(){
  
  if (transform.childCount < maxEnemiesAlive && totalEnemies > 0){

    var pos = spawnPoints[Random.Range(0, spawnPoints.length)].transform.position;
  
    var rot = Quaternion.LookRotation(player.position - pos);
   
    var enemy = Instantiate(enemyPrefab, pos, rot);
   enemy.name = "Zombie";
    enemy.parent = transform;
    totalEnemies--; 
  }
}