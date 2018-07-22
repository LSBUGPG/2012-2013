#pragma strict
var maxHealth : float = 100;
var currentHealth : float = 100;
var maxMagic : float = 100;
var currentMagic : float = 100;

var timer : float = 0;

function Start () {

}

function Update () {

	/*timer += Time.deltaTime;
	if(timer > 0.5)
	{
		currentHealth -= 10;
		currentMagic -= 10;
		timer = 0;
		*/
}

if(maxHealth <=0)
{
	Application.LoadLevel("Game v2");
}
