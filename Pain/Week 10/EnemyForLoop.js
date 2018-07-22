function Start()
{
	for(var x: float = 0; x < 3; ++x)
	{
		for(var y: float = 0; y < 3; ++y)
		{
			for(var z: float = 0; z < 3; ++z)
			{
				var enemyPosition  : Vector3 = Vector3(x*10 ,y*10 ,z*10);
				var enemy: GameObject = Instantiate(enemyPrefab, enemyPlaceHolder.transform.position + enemyPosition, enemyPlaceHolder.transform.rotation);
				
				enemy.name = String.Format( "Enemy{0}{1}{2}", x, y, z );
			}
		}
	}
}