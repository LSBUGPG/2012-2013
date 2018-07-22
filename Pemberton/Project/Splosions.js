var explosionPrefab : Transform;

function OnCollisionEnter(collision : Collision) { 
var contactPoint : ContactPoint = collision.contacts[0]; 
var exRotation : Quaternion = Quaternion.FromToRotation(Vector3.up, contactPoint.normal); 
var exPos : Vector3 = contactPoint.point; Instantiate(explosionPrefab, exPos, exRotation); 
}