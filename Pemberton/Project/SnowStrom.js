var snowStorm:GameObject;
var gManager:GameManager;
var timer:float;
var runTime:boolean = false;

function Update () {

	if (Input.GetKeyDown(KeyCode.Space)&& gManager.playerPoints >= 1000)
	{
		snowStorm.SetActiveRecursively(true);
		gManager.playerPoints -= 1000;
		runTime = true;
	}
	
	if (Input.GetKeyUp(KeyCode.Space) || timer >= 15)
	{
		snowStorm.SetActiveRecursively(false);
		runTime = false;
		timer = 0;
	
	}
	if (runTime == true)
	{
		timer += Time.deltaTime;
	}

}