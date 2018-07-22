#pragma strict

//This is a version of a pause menu script that I found on unity wiki and made a few small edits such as button position and labels.

var showMenu = false;

 

function Update (){

    if (Input.GetKeyDown(KeyCode.Escape))

{  
    
    	if(Time.timeScale == 0)
   {
     	Time.timeScale = 1;
   }
		else 
		{
      	Time.timeScale = 0;
      	Screen.showCursor = true;
   		}

        if(showMenu == false)
        
        {

            showMenu = true;

            }

        else{

            showMenu = false;

        }

    }

}

        

function OnGUI (){

    if(showMenu==true){

        if(GUI.Button (Rect (0,100,100,50), "Resume")){

            showMenu = false;
            Time.timeScale = 1;
            Screen.showCursor = false;

        }

        if(GUI.Button (Rect (0,150,100,50), "Main Menu")){

           Time.timeScale = 1;
             Application.LoadLevel(0);
             Screen.showCursor = true;


        }

        
    }

} 

