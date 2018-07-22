var mfMinInterval : float;

var mfMaxInterval : float;

var mvOffset = Vector2( 0.125, 0.0 );

 

private var mfTimer = 0.0;

 

function Update () 

{

    mfTimer -= Time.deltaTime;

    if( mfTimer <= 0.0 )

    {

        mfTimer = Random.Range( mfMinInterval, mfMaxInterval );

        renderer.material.mainTextureOffset += mvOffset;

    }

}