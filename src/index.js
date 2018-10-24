import style from "./main.css";

var drawSquare = document.getElementById("draw_square");
var squareSideLength = document.getElementById("square_size");
var points_amount = document.getElementById("points_amount");

var circle = document.getElementById("circle");
var circle2d = circle.getContext("2d");

// Stores and returns values given by user to create circle and square
function holdCircleValues() {
  var points_value = parseInt(points_amount.value * 10);
  var number = parseInt(squareSideLength.value);

  return {
    points_value: points_value,
    number: number
  };
}

// Creates circle via canvas 5x bigger than given value
function createCircle(object) {
  circle2d.beginPath();
  circle2d.arc(
    object.number * 5,
    object.number * 5,
    object.number * 5,
    0,
    2 * Math.PI
  );
  circle2d.stroke();
  circle2d.closePath();
}

// Adding styling for drawn canvas square
function addStyleToCanvasElement() {
  var canvas = document.getElementsByTagName("canvas")[0];
  var square_div = document.getElementById("square_place");

  canvas.width = squareSideLength.value * 10;
  canvas.height = squareSideLength.value * 10;

  square_div.style.textAlign = "center";
  square_div.style.margin = "40px 0 40px 0";
}

// Draws dots inside square
function drawDots(object) {
  var radius = 0.75;
  var max = squareSideLength.value * 10;

  circle2d.clearRect(0, 0, circle.width, circle.height);

  for (var i = 0; i < object.points_value; i++) {
    var rand_x = Math.random(i) * max;
    var rand_y = Math.random(i) * max;

    circle2d.beginPath();
    circle2d.fillStyle = "#0022FE";
    circle2d.arc(rand_x, rand_y, radius, 0, 2 * Math.PI);
    circle2d.fill();
    circle2d.closePath();
  }
}

// Counts Pi with dots, circle and square data
function countPi(object) {
  var points_total = 0;
  var points_inside = 0;

  while (points_total < object.points_value) {
    var x = Math.random();
    var y = Math.random();
    var distance = Math.sqrt(x * x + y * y);

    points_total++;

    if (distance < 1) {
      points_inside++;
    } else {
      console.log(
        points_inside +
          "/" +
          points_total +
          " pi == " +
          (4 * points_inside) / points_total
      );
    }
  }

  var result = document.getElementById("pi_result");
  var h1 = document.createElement("h1");

  h1.innerText =
    points_inside +
    "/" +
    points_total +
    " pi == " +
    (4 * points_inside) / points_total;
  h1.style.textAlign = "center";

  result.appendChild(h1);
}

// Cleans inputed values after creating canvas element - square with circle inside
function resetPoints() {
  points_amount.value = "";
  squareSideLength.value = "";
}
