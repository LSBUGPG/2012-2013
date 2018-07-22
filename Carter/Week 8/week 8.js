var health:int = 100;

if (takenDamage == true)
	{
		health -= 3;
		print(health);
	}
	
	if(health <=0){

		Application.LoadLevel("TopDownShooter");






function Update () {
	if(Input.GetButtonDown("Fire1")){
	
		if(!bulletPrefab || !bulletSpeed) {
			Debug.Log('[Shoot] bulletprefab or bulletSpeed is undefined');
		} else {
			var bulletCreate = Instantiate(bulletPrefab,GameObject.Find("spawnPoint").transform.position, Quaternion.identity);
			bulletCreate.rigidbody.AddForce(transform.forward * bulletSpeed);
	
	}
}
}
