#pragma strict

public var bulletPrefab : Transform;
public var bulletSpeed : float = 20;

function Update () {
	if(Input.GetButtonDown("Fire1")){
	
			var bulletCreate = Instantiate(bulletPrefab,GameObject.Find("bulletPrefab").transform.position, Quaternion.identity);
			bulletCreate.rigidbody.AddForce(transform.forward * bulletSpeed);
	
	}
}
