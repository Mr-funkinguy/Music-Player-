let song, analyzer
let fft

function preload() {
 song = loadSound('ye.mp3')
}

function setup() {
  createCanvas(1024, 768)
  song.loop()
  
  analyzer = new p5.Amplitude()
  analyzer.setInput(song)

  fft = new p5.FFT();
  fft.setInput(song);
}

function draw() {
  background(0)
  noStroke()

  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  fill('#3DF5CE')
  // fill(r, g, b, 127);
  // stroke(0);

  // Draw an ellipse with size based on volume


  let spectrum = fft.analyze();

  beginShape();
  vertex(0, height)
  for (i = 0; i < spectrum.length; i++) {
    vertex(i + 1, map(spectrum[i], 0, 255, height, 0));
  }
  endShape();
}
