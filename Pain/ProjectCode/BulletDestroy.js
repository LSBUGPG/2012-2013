var bulletTime : int = 20;

function Update(){
bulletTime--;
		if(bulletTime<=0)
		{
			Destroy(this.gameObject);
			bulletTime = 20;
		}	
}
		