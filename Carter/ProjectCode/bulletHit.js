var dmg:float = 5;

function OnTriggerEnter(hit:Collider){
if(hit.tag == "Enemy"){
hit.transform.SendMessage("Damage",dmg);

Destroy (gameObject);

}

}