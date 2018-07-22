#pragma strict

// The variables hold the game sprites
private var screen              : Texture2D = null; 
private var net                 : Texture2D = null;
private var ball                : Texture2D = null;
private var numbers             : Texture2D = null;
private var paddle              : Texture2D = null;

// These variables configure the game
private var screenWidth         : int = 640;
private var screenHeight        : int = 480;
private var xScreenCentre       : int = screenWidth / 2;
private var yScreenCentre       : int = screenHeight / 2;
private var xBallScale          : int = 0;
private var yBallScale          : int = 0;
private var widthBall           : int = 15 << xBallScale;
private var heightBall          : int = 15 << yBallScale;
private var xPaddleScale        : int = 0;
private var yPaddleScale        : int = 6;
private var widthPaddle         : int = 15 << xPaddleScale;
private var heightPaddle        : int = 1 << yPaddleScale;
private var xNetScale           : int = 0;
private var yNetScale           : int = 4;
private var widthNet            : int = 7 << xNetScale;
private var heightNet           : int = 31 << yNetScale;
private var xScaleScore         : int = 3;
private var yScaleScore         : int = 3;
private var widthScore          : int = 3 << xScaleScore;
private var heightScore         : int = 5 << yScaleScore;
private var resetKeyCode        : KeyCode = KeyCode.Escape;
private var p1UpKeyCode         : KeyCode = KeyCode.A;
private var p1DownKeyCode       : KeyCode = KeyCode.Z;
private var p2UpKeyCode         : KeyCode = KeyCode.UpArrow;
private var p2DownKeyCode       : KeyCode = KeyCode.DownArrow;
private var xBallStart          : int = xScreenCentre;
private var yBallStart          : int = yScreenCentre;
private var dxBallStart         : int = 8;
private var dyBallStart         : int = 8;
private var dyPaddle            : int = 8;
private var xP1Start            : int = widthPaddle / 2;
private var yP1Start            : int = yScreenCentre;
private var xP2Start            : int = screenWidth - widthPaddle / 2;
private var yP2Start            : int = yScreenCentre;
private var xP1Score            : int = screenWidth / 4;
private var yP1Score            : int = heightScore;
private var xP2Score            : int = screenWidth - (screenWidth / 4);
private var yP2Score            : int = heightScore;
private var maximumScore        : int = 9;

// These data items represent the state of the game:
private var p1Score             : int = 0;
private var p2Score             : int = 0;
private var xBall               : int = xBallStart;
private var yBall               : int = yBallStart;
private var dxBall              : int = dxBallStart;
private var dyBall              : int = dyBallStart;
private var xP1Paddle           : int = xP1Start;
private var yP1Paddle           : int = yP1Start;
private var xP2Paddle           : int = xP2Start;
private var yP2Paddle           : int = yP2Start;

// The following data items provide the bitmap data for drawing the parts
// of the game. Each is encoded with 1 bit representing 1 pixel. In each
// byte, the most significant bit represents the left most pixel and
// each subsequent bit represent the next pixel to the right. Each line
// of the bitmap starts with a new byte so any bits to the right of the
// last pixel are ignored.

private var ballBitmap: int[] = [

     0x07, 0xc0,
     0x1f, 0xf0,
     0x3f, 0xf8,
     0x7f, 0xfc,
     0x7f, 0xfc,
     0xff, 0xfe,
     0xff, 0xfe,
     0xff, 0xfe,
     0xff, 0xfe,
     0xff, 0xfe,
     0x7f, 0xfc,
     0x7f, 0xfc,
     0x3f, 0xf8,
     0x1f, 0xf0,
     0x07, 0xc0
];

private var paddleBitmap: int[] = [ 0x80 ];

private var netBitmap: int[] = [ 0x80, 0x00 ];

private var numberBitmaps: int[] = [

    0xe0, 0xa0, 0xa0, 0xa0, 0xe0,
    0x40, 0x40, 0x40, 0x40, 0x40,
    0xe0, 0x20, 0xe0, 0x80, 0xe0,
    0xe0, 0x20, 0xe0, 0x20, 0xe0,
    0xa0, 0xa0, 0xe0, 0x20, 0x20,
    0xe0, 0x80, 0xe0, 0x20, 0xe0,
    0xe0, 0x80, 0xe0, 0xa0, 0xe0,
    0xe0, 0x20, 0x20, 0x20, 0x20,
    0xe0, 0xa0, 0xe0, 0xa0, 0xe0,
    0xe0, 0xa0, 0xe0, 0x20, 0x20
];

function bitmapToTexture(pixels: int[], width: int, height: int): Texture2D
{
    var bitmap: Texture2D = new Texture2D(width, height, TextureFormat.ARGB32, false);
         
    var bytesPerLine: int = (width + 7) / 8;
         
    // Loop through every pixel...
    for (var row: int = 0; row < height; ++row) {
    
        for (var col: int = 0; col < width; ++col) {
    
            // Find the byte in the bitmap data of the start of the 
            // line containing the pixel we want to set:
            var byteOffset: int = row * bytesPerLine + col / 8;
    
            // Find the index of the bit in that byte:
            var bitIndex: int = (col % 8);
    
            // Make a mask for the pixel we want to set:
            var bitMask: int = 0x80 >> bitIndex;
            
            var colour: Color = Color.black;
            colour.a = 0;
            
            if ((pixels[byteOffset] & bitMask) != 0) {
            
                colour = Color.white;
                colour.a = 1;
            }
            
            bitmap.SetPixel(col, row, colour);
        }
    } 
    
    bitmap.wrapMode = TextureWrapMode.Repeat;
    bitmap.filterMode = FilterMode.Point;
    bitmap.Apply();
    return bitmap;
}


function Start () {

    screen = new Texture2D(1, 1);
    screen.SetPixel(0, 0, Color.black);
    screen.Apply();
    
    net = bitmapToTexture(netBitmap, 1, 2);
    ball = bitmapToTexture(ballBitmap, 15, 15);
    numbers = bitmapToTexture(numberBitmaps, 3, 50);
    paddle = bitmapToTexture(paddleBitmap, 1, 1);
}

function Min (a: int, b: int): int {

    return (a < b)? a : b;
}

function Max (a: int, b: int): int {

    return (a > b)? a : b;
}

function Update () {

    // Check for the escape key being pressed. If so, then
    // reset the game's state:
    if (Input.GetKey(resetKeyCode)) {
    
        p1Score = 0;
        p2Score = 0;
        xBall = xBallStart;
        yBall = yBallStart;
        dxBall = dxBallStart;
        dyBall = dyBallStart;
        xP1Paddle = xP1Start;
        yP1Paddle = yP1Start;
        xP2Paddle = xP2Start;
        yP2Paddle = yP2Start;
    }
    
    // If player 1 up key is pressed, move the player 1 paddle up:
    if (Input.GetKey(p1UpKeyCode)) {
    
        yP1Paddle = Max(yP1Paddle - dyPaddle, heightPaddle / 2);
    }
    
    // If player 1 down key is pressed, move the player 1 paddle down:
    if (Input.GetKey(p1DownKeyCode)) {
    
        yP1Paddle = Min(yP1Paddle + dyPaddle, screenHeight - heightPaddle / 2);
    }    
    
    // If player 2 up key is pressed, move the player 2 paddle up:
    if (Input.GetKey(p2UpKeyCode)) {
    
        yP2Paddle = Max(yP2Paddle - dyPaddle, heightPaddle / 2);
    }
    
    // If player 2 down key is pressed, move the player 2 paddle down:
    if (Input.GetKey(p2DownKeyCode)) {
    
        yP2Paddle = Min(yP2Paddle + dyPaddle, screenHeight - heightPaddle / 2);
    }    
     
    // A temporary variable used in the calculations below:
    var distance: int;
    
    // If neither player has scored maximum points yet, continue the game:
    if (p1Score != maximumScore && p2Score != maximumScore) { 
    
        xBall+= dxBall;
        yBall+= dyBall; 

        // If the new ball position crosses the top or bottom of the
        // screen, invert the y velocity:
        if (yBall < 0 || yBall >= screenHeight)
            dyBall = -dyBall;

        // These pre-calculated constants will be used in the tests below:
        var xMinGap: int = (widthBall + widthPaddle) / 2;
        var yMinGap: int = (heightBall + heightPaddle) / 2; 
        
        // if the ball is going left and the x position of the ball is to
        // the left or touching the paddle...
        if (dxBall < 0 && xBall - xP1Paddle <= xMinGap) {
            
            // calculate the distance in pixels between the centre of the
            // paddle and the centre of the ball:
            distance = yBall - yP1Paddle;
            
            // if the distance is less than the combined paddle and ball
            // heights then it's a hit, so bounce the ball in X...
            if (distance >= -yMinGap && distance <= yMinGap) {
            
                dxBall = -dxBall;
            } 
            // otherwise, if the ball is off the left of the screen...
            else if (xBall < 0) {
            
                // if the score is not already maximum, then score a
                // point...
                if (p2Score < maximumScore) p2Score++;
                
                // then reset the ball:
                xBall = xBallStart;
                yBall = yBallStart;
                dxBall = -dxBall;
            }
        }        
    
        // if the ball is going right and the x position of the ball is to
        // the right or touching the paddle...
        if (dxBall > 0 && xP2Paddle - xBall <= xMinGap) {
        
            // calculate the distance in pixels between the centre of the
            // paddle and the centre of the ball:
            distance = yBall - yP2Paddle;
            
            // if the distance is less than the combined paddle and ball
            // heights then it's a hit, so bounce the ball in X...
            if (distance >= -yMinGap && distance <= yMinGap) {
            
                dxBall = -dxBall;
            } 
            // otherwise, if the ball is off the right of the screen...
            else if (xBall >= screenWidth) {
            
                // if the score is not already maximum, then score a
                // point...
                if (p1Score < maximumScore) p1Score++;
            
                // then reset the ball:
                xBall = xBallStart;
                yBall = yBallStart;
                dxBall = -dxBall;
            }
        }
    }
}

function OnGUI () {
 
    GUI.DrawTexture(Rect(0, 0, screenWidth, screenHeight), screen);

    var position: Rect;
 
    position = Rect(0, 0, widthPaddle, heightPaddle);
    position.center = Vector2(xP1Paddle, yP1Paddle); 
    GUI.DrawTextureWithTexCoords(position, paddle, Rect(0, 0, 1, 1));

    position.center = Vector2(xP2Paddle, yP2Paddle);
    GUI.DrawTextureWithTexCoords(position, paddle, Rect(0, 0, 1, 1));
 
    position = Rect(0, 0, widthScore, heightScore);
    position.center = Vector2(xP1Score, yP1Score);
    GUI.DrawTextureWithTexCoords(position, numbers, 
                                 Rect(0, 0.1 * (p1Score + 1), 1, -0.1)); 
    
    position.center = Vector2(xP2Score, yP2Score);
    GUI.DrawTextureWithTexCoords(position, numbers, 
                                 Rect(0, 0.1 * (p2Score + 1), 1, -0.1));

    position = Rect(0, 0, widthNet, heightNet);
    position.center = Vector2(xScreenCentre, yScreenCentre); 
    GUI.DrawTextureWithTexCoords(position, net, Rect(0, 0, 1, 16));

    position = Rect(0, 0, widthBall, heightBall);
    position.center = Vector2(xBall, yBall); 
    GUI.DrawTextureWithTexCoords(position, ball, Rect(0, 0, 1, 1));
}
