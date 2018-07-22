#pragma strict

var BulletPrefab:Transform;
var force : float = 2000;

function Update()
{
if(Input.GetButtonDown("Fire1"))
{
var bullet = Instantiate(BulletPrefab, 

GameObject.Find("spawnPoint").transform.position, GameObject.Find("Gun").transform.rotation); bullet.rigidbody.AddForce(bullet.transform.forward * force);

}
}