import style from "./main.css";

const generateButton = document.getElementById("draw_square");
let context;
let pi;
let pointsInside;
let dotsNumber;

// Estimate Pi
const estimatePi = e => {
  initValues();

  const squareSize = document.getElementById("square_size").value;
  dotsNumber = document.getElementById("points_amount").value;

  context = setCanvas(squareSize);

  drawSquare(context, squareSize);
  drawCircle(context, squareSize);

  for (let i = 0; i <= dotsNumber; i++) {
    let x = Math.floor(Math.random() * squareSize);
    let y = Math.floor(Math.random() * squareSize);

    setTimeout(function() {
      calculatePi(x, y, squareSize);
      drawPoints(context, x, y);
    }, 500)
  }
};

// Store project's pi, dots, points data
const initValues = () => {
  pi = 0;
  pointsInside = 0;
  dotsNumber =+ (document.getElementById('points_amount').value);
};

// Init canvas element
const setCanvas = width => {
  let canvas = document.getElementById("canvas");

  canvas.width = width;
  canvas.height = width;

  return (context = canvas.getContext("2d"));
};

// Create, style circle via canvas element and input value
const drawCircle = (context, width) => {
  const square_div = document.getElementById("square_place");

  square_div.style.textAlign = "center";
  square_div.style.margin = "40px 0 40px 0";

  context.beginPath();
  context.arc(width / 2, width / 2, width / 2, 0, 2 * Math.PI);
  context.stroke();
  context.fillStyle = "#ccd3ff";
  context.fill();
  context.closePath();
};

// Create, style square via canvas element and input value
const drawSquare = (context, width) => {
  context.fillStyle = "#e6e6e6";
  context.fillRect(0, 0, width, width);
  context.strokeRect(0, 0, width, width);
};

// Add points to square element
const drawPoints = (context, x, y) => {
  context.beginPath();
  context.arc(x, y, 1, 0, 2 * Math.PI);
  context.fillStyle = "#666666";
  context.fill();
  context.closePath();
};

// Calculate Pi result and show it
const calculatePi = (x, y, size) => {
  let d = Math.hypot(x, y);

  if (d <= size) {
    pointsInside++;
  }

  pi = 4 * pointsInside / dotsNumber;

  document.getElementById('pi_result').innerText = pi;
};

generateButton.addEventListener("click", estimatePi);
