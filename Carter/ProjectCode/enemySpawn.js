var enemyPrefab: Transform;
var maxEnemiesAlive: int = 10;
var maxEnemies: int = 30;
private var totalEnemies: int;
private var spawnPoints: GameObject[];
private var player: Transform;

function Start(){
  spawnPoints = GameObject.FindGameObjectsWithTag("spawnpoint");
  player = GameObject.FindWithTag("Player").transform;
  totalEnemies = maxEnemies; // define how many enemies the level has
}

function Update(){
  // when some enemy is killed and total enemies isn't zero yet...
  if (transform.childCount < maxEnemiesAlive && totalEnemies > 0){
    // draw a random spawn point:
    var pos = spawnPoints[Random.Range(0, spawnPoints.length)].transform.position;
    // find a rotation to look at the player:
    var rot = Quaternion.LookRotation(player.position - pos);
    // create the new enemy facing the player:
    var enemy = Instantiate(enemyPrefab, pos, rot);
    // child it to Enemies (this object):
    enemy.parent = transform;
    totalEnemies--; // decrement the remaining enemies
  }
}