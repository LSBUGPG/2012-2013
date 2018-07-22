public var bulletPrefab : Transform;
public var bulletSpeed : float = 6000;

function Update () {
	if(Input.GetButtonDown("Fire1")){
	
		if(!bulletPrefab || !bulletSpeed)
		 {
			Debug.Log('[Shoot] bulletprefab or bulletSpeed is undefined');
		} 
		else 
		{
			var bulletCreate = Instantiate(bulletPrefab, GameObject.Find("spawnPoint").transform.position, Quaternion.identity);
			bulletCreate.rigidbody.AddForce(transform.forward * bulletSpeed);
			bulletCreate.name = "bullet"; //This code instatiates the bullet prefab and moves it forward
	
		}
}
}