#pragma strict

var destination : Transform;

function OnTriggerEnter(other : Collider) {
    if (other.tag == "Player") {
        other.transform.position = destination.position;
    }
}