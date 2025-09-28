function setup() {
  createCanvas(700, 700)
  background(0);

  for (let x = 150; x < 600; x += 50) {
    for (let y = 160; y < 600; y += 50) {
        strokeWeight(11)
        stroke (213,255,255)
      ellipse (x,y,95,95)

    }
}
for (let x = 120; x < 600; x += 40) {
    for (let y = 130; y < 600; y += 40) {
         noFill ()
       strokeWeight (2) 
       stroke (11,255,126)
      ellipse(x, y, 20, 20);
    }

    }
    let stringValue = "4.14";
let floatValue = parseFloat(stringValue);
console.log(floatValue); 
console.log(typeof floatValue);

    for (let x = 150; x < 600; x += 40) {
    for (let y = 150; y < 600; y += 40) {
        let angle = frameCount * 21;
  rotate(angle);
       noFill ()
       strokeWeight (2) 
       stroke (85,255,11)
      ellipse(x, y, 25, 25);
    
  
  
}


}
    }
