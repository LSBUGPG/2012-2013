#pragma strict

var gameManager : GameManager;

var mainHUD : Texture2D;
var healthBar : Texture2D;
var magicBar : Texture2D;
var boarderHealth : Texture2D;
var boarderMagic : Texture2D;
var currentHealthPercentage : float;
var currentMagicPercentage : float;


function OnGUI()
{
	//x,y,height,width
	//GUI.DrawTexture(Rect(520,500,53,134), healthBar, ScaleMode.StretchToFill, true);
	
	 currentHealthPercentage = gameManager.currentHealth / gameManager.maxHealth;
	
	GUI.DrawTexture(Rect(0,Screen.height - 150,800,150), mainHUD, ScaleMode.StretchToFill, true);

	GUI.BeginGroup (Rect(520, 472 + 134 - (134 * currentHealthPercentage), 53, 134 * currentHealthPercentage));
		GUI.DrawTexture(Rect(0, -134 + (134 * currentHealthPercentage) ,53,134), healthBar, ScaleMode.StretchToFill, true);
	GUI.EndGroup();
	
	//GUI.DrawTexture(Rect(605,510,53,134), magicBar, ScaleMode.StretchToFill, true);
	
	 currentMagicPercentage = gameManager.currentMagic / gameManager.maxMagic;

	GUI.BeginGroup (Rect(605, 472 + 134 - (134 * currentMagicPercentage), 53, 134 * currentMagicPercentage));
		GUI.DrawTexture(Rect(0, -134 + (134 * currentMagicPercentage) ,53,134), magicBar, ScaleMode.StretchToFill, true);
	GUI.EndGroup();
	
	
	GUI.DrawTexture(Rect(505,468,82,150), boarderHealth, ScaleMode.StretchToFill, true);
	GUI.DrawTexture(Rect(588,468,82,150), boarderMagic, ScaleMode.StretchToFill, true);
	//GUI.DrawTexture(Rect(0,Screen.height - 150,Screen.width,150), mainHUD, ScaleMode.StretchToFill, true);
	
}
