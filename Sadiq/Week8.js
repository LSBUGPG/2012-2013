// Variables

var screeWidth: int=480;
var screenHeight: int=480;

var player1PositionX: int;
var player1PositionY: int;
var player2PositionX: int;
var player2PositionY: int;

player1Fuel: int= ;
player2Fuel: int= ;

var missilePositionX: int;
var missilePositionY: int;
var numberOfMissiles: int=0;

var btnUp: boolean=false;
var btnDown: boolean=false;
var btnRight: boolean=false;
var btnA: boolean=false;
var btnB: boolean=false;

// Rules

pressButtonA {

if(btnA == true)
	{ 
		fireMissile();
	  	numberofMissiles ++;
	}

}


pressButtonB {
if(btnB == true)
	{ 
		playerPositionX++;
	  	playerPositionY++;
	}

}


checkMissile {

if( missilePositionX <= 0 || missilePositionX >=480 || missilePositionY <=0 || missilePositionY >=0 )
	{ 
		missile.Destroy()
	  	numberofMissiles --;
	}

else if ( missilePositionX == playerPositionX && missilePositionY == playerPositionY )
	{
		player.Destroy();
		missile.Destroy();
	}

}

voidButtonA {

if( numberOfMissiles >= 3 )
	{
		buttonA.disable();
	}

}

checkFuel {
	
if( playerFuel <=0 )
	{
		player.Destroy();
	}

}

teleportPlayer {

if( playerPositionX < 0 )
	{
		playerPositionX == 480;
	}
elseif( playerPositionX > 480 )
	{
		playerPositionX == 0;
	}
elseif( playerPositionY > 0 )
	{
		playerPositionY == 480;
	}
elseif( playerPositionY < 480 )
	{
		playerPositionY == 0;
	}
}




