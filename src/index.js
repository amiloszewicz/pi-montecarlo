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
