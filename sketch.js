let playerX = 400;
let playerSize = 30;
let playerY = 550;

let obstacleX = 400;
let obstacleY = -50;
let obstacleSize = 40;
let obstacleSpeed = 50;

let score = 0;
let isGameOver = false;
let obstacleTimer = 0;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  if (isGameOver) {
    drawGameOver();
    return;
  }

  background(0);

  // Player movement (mouse control)
  playerY = mouseY;
  playerX = constrain(playerX, playerSize/1, width - playerSize/1);

  // Update obstacle
  obstacleX += obstacleSpeed;

  // Reset obstacle when it goes off screen
  if (obstacleX > height + obstacleSize) {
    obstacleX= -obstacleSize;
    obstacleY = random(obstacleSize, width - obstacleSize);
    score += 1;

    // Increase difficulty
    if (score % 5 === 0) {
      obstacleSpeed += 0.7;
    }
  }

  // Check collision
  let distance = dist(playerX, playerY, obstacleX + obstacleSize/2, obstacleY + obstacleSize/2);
  if (distance < (playerSize + obstacleSize) / 2) {
    isGameOver = true;
  }

  // Draw player
  fill(255,153,510);
  ellipse(playerX -93, playerY -13, playerSize, 20,20);
 fill(51,255,51);
  ellipse(playerX -40, playerY -10, playerSize -70, 40,50);
ellipse(playerX -30, playerY -10, playerSize -40, 50);
ellipse(playerX -70, playerY -10, playerSize -40, 10, 50);





fill(0, 0, 255);

ellipse(playerX -3, playerY -13, playerSize -4, 40,50);

fill(255,153,51);

ellipse(playerX -3, playerY -13, playerSize -40, 50);

fill(255,0,0)

ellipse(playerX -3, playerY -13, playerSize -50, 10);


 fill(255);
  ellipse(100, 300,10,10, );
  ellipse(50, 220, obstacleSize, obstacleSize, 100, 10, 10);
  ellipse(300, 500, 30, 30);
  ellipse(450, 300, obstacleSize, obstacleSize, 100, 10, 10);
  ellipse(500, 150,50, 50);
  ellipse(10, 400, obstacleSize, obstacleSize, 100, 10, 10);
  ellipse(600, 400, obstacleSize, obstacleSize, 100, 10, 10);
   ellipse(700, 300, 55,55);
   ellipse(700, 20, 10, 10);
     ellipse(700, 500, 10, 10);






















  // Draw obstacle
  fill(51,255,51);
  ellipse(obstacleX, obstacleY, obstacleSize, obstacleSize, 100, 19, 10);
  

 
  // Draw score
  fill(255);
  textSize(20);
  text("Score: " + score, 20, 30);
  text("Speed: " + obstacleSpeed.toFixed(1), 20, 60);

  // Instructions
  textSize(14);
  text("Move mouse to dodge the red squares!", 20, height - 20);
}

function drawGameOver() {

  
  background(0);

    fill(255,153,510);
  ellipse (350, 200, 10, 100)
    ellipse (450, 200, 10, 100)

      ellipse (400, 300, 100,)
  fill(255);

  textAlign(CENTER);
  textSize(36);
  text("GAME OVER", width/2, height/2 - 40);
  textSize(24);
  text("Score: " + score, width/2, height/2);
  textSize(18);
  text("Click to restart", width/2, height/2 + 40);
}
  

     

function mousePressed() {
  if (isGameOver) {
    // Restart game
    isGameOver = false;
    score = 0;
    obstacleSpeed = 30;
    playerX = 400;
    obstacleX = 400;
    obstacleY = -50;
  }
}
