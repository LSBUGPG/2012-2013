#pragma strict

var CollectionExplosion : GameObject;
var guiManager : NewGUIManager;
var Score : int = 0;



function Start () {

}

function Update () {

}

function OnTriggerEnter( other : Collider ) {
    if (other.tag == "WaterItem") {
        Score += 1;
        Destroy(other.gameObject);
        CollectionExplosion = Instantiate(CollectionExplosion, transform.position, transform.rotation);
        guiManager.scoreText= "Score: " +Score.ToString();
      	
        
    }
}