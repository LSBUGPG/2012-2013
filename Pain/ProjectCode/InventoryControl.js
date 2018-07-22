var Guiscript : InventoryGui ;

function Update () {
	if (Input.GetKeyDown ("i")){
        if (Guiscript.enabled == true){
        Guiscript.enabled = false;
        }
        else {
        Guiscript.enabled = true;
        }
    }
}