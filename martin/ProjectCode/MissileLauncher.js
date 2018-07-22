var projectile : Rigidbody;
var speed = 20;
function Update()
{
 if( Input.GetButtonDown( "Fire1" ) )
  {
  var instantiatedProjectile : Rigidbody = Instantiate( projectile, transform.position, transform.rotation );
  instantiatedProjectile.velocity = transform.TransformDirection( Vector3( 0, 0, speed ) );
  Physics.IgnoreCollision( instantiatedProjectile. collider,transform.root.collider );
  instantiatedProjectile.name = "missile"; // this line of code changes the name of your variable every time a new missile is spawned. 
  //This is helpfull when checking for collisions. (See Plane Controller for more notes on this (1))
  }
}