var gameManager : GameManager;

function update()
{
	if(gameManager.currentHealth <=0)
	{
		Application.LoadLevel("Game v2");
	}
}