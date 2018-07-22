var health:float = 90;
var enemy : GameObject;

function Damage(dmg:float){
health -= dmg;
}

function Update (){
if(health <=0){

Destroy(enemy);

}

}