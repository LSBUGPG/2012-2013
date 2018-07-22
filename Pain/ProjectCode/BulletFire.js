var BulletPrefab:Transform;
var force : float = 1000;

function Update()
{
	if(Input.GetButtonDown("Fire1"))
	{
		var bullet = Instantiate(BulletPrefab, GameObject.Find("spawnPoint").transform.position, GameObject.Find("Gun").transform.rotation);
		var bullet2 = Instantiate(BulletPrefab, GameObject.Find("spawnPoint2").transform.position, GameObject.Find("Gun2").transform.rotation);
		
		bullet.rigidbody.AddForce(bullet.transform.forward * force);
		bullet2.rigidbody.AddForce(bullet2.transform.forward * force);
		
		bullet.name = "Bullet 1";
		bullet2.name = "Bullet 1";
	}
}