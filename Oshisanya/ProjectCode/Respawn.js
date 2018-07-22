#pragma strict

var dest: Transform;

function OnTriggerEnter(other: Collider){
  print("other.name:" + other.name);
  if (other.name == "First Person Controller"){
 	 
    // move the player and align it to the dest object:
    other.transform.position = dest.position;
    other.transform.rotation = dest.rotation;
    
  }
}