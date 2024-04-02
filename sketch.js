let mobilenet;

let puffin;

function modelReady() {
  console.log(`Model is ready.`);
  mobilenet.predict(puffin, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    const { label, confidence } = results[0];
    fill(0);
    textSize(64);
    text(label, 10, height - 100);
    createP(confidence);
  }
}

function handleImage(img) {
  image(img, 0, 0, width, height);
}

function setup() {
  createCanvas(640, 480);

  puffin = loadImage("/images/puffin.png", handleImage);

  background(0);

  mobilenet = ml5.imageClassifier("MobileNet", modelReady);
}
