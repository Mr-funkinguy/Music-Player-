let sound;
let amp;

// Load sound file before setup() function runs
function preload(){
  // Load the sound file saved as "starling.mp3"
  sound = loadSound('https://github.com/Mr-funkinguy/Music-Player-/blob/main/Songs/xiou.mp3?raw=true');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Loop sound file
  sound.loop();
  // Create a new instance of p5.Amplitude() object
  amp = new p5.Amplitude();
  
  noStroke();
}

function draw() {
  background(0, 30);
  
  // getLevel() method returns the amplitude level between 0 and 1 at the time the method is called
  // If level is 0, there is no sound (silence)
  // If level is 1, it is at its loudest
  let level = amp.getLevel();
  
  circle(width / 2, height / 2, level * width / 2);
}