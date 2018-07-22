#pragma strict

var ballRelease: GameObject;

function OnTriggerEnter(other : Collider) {
    if (other.tag == "Player") {
    ballRelease.rigidbody.useGravity = true;
    ballRelease.rigidbody.freezeRotation = false;
    }
}