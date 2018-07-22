var gManager:GameManager;
var score : int = 0; 
function Update(){

score = gManager.playerPoints;
if( score > PlayerPrefs.GetFloat("Score1") ){
    PlayerPrefs.SetFloat( "Score5", PlayerPrefs.GetFloat("Score4") );
    PlayerPrefs.SetFloat( "Score4", PlayerPrefs.GetFloat("Score3") );
    PlayerPrefs.SetFloat( "Score3", PlayerPrefs.GetFloat("Score2") );
    PlayerPrefs.SetFloat( "Score2", PlayerPrefs.GetFloat("Score1") );
    PlayerPrefs.SetFloat("Score1", score);
}
else if( score > PlayerPrefs.GetFloat("Score2") ){
    PlayerPrefs.SetFloat( "Score5", PlayerPrefs.GetFloat("Score4") );
    PlayerPrefs.SetFloat( "Score4", PlayerPrefs.GetFloat("Score3") );
    PlayerPrefs.SetFloat( "Score3", PlayerPrefs.GetFloat("Score2") );
    PlayerPrefs.SetFloat("Score2", score);
}
else if( score > PlayerPrefs.GetFloat("Score3") ){
    PlayerPrefs.SetFloat( "Score5", PlayerPrefs.GetFloat("Score4") );
    PlayerPrefs.SetFloat( "Score4", PlayerPrefs.GetFloat("Score3") );
    PlayerPrefs.SetFloat("Score3", score);
}
else if( score > PlayerPrefs.GetFloat("Score4") ){
    PlayerPrefs.SetFloat( "Score5", PlayerPrefs.GetFloat("Score4") );
    PlayerPrefs.SetFloat("Score4", score);
}
else if( score > PlayerPrefs.GetFloat("Score5") ){
    PlayerPrefs.SetFloat("Score5", score);
}
}