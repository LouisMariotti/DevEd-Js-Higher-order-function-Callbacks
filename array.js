// Calbacks higher order functions

const videos = [
  "pranking my sister! is she Okay (gone wrong)",
  "How to Javascript",
  "html tutorial",
  "learning piano",
];

videos.forEach(function (video) {
  // This is the callback function and runs everytime we loop over each element in the above array
  console.log("run");
  console.log(video);
});

button.addEventListner("click", function () {
  // function() is the callback function, this wait for the order to run, so when we click on the button the function run in this case
});

// videos.forEach(function (video) {
//   // forEach is a higher order function. It is a function that takes another function as parameter
//   console.log(video); // Going to run over for each individual string in the videos array
// });

// Higher order function

// function repeater(fn) {
//   fn();
//   fn();
//   fn();
// }

// function sayHello() {
//   console.log("Hello There!");
// }

// repeater(sayHello); // Function take another function as a parameter

// Can do it clearer Higher order function

function repeater(fn) {
  fn();
  fn();
  fn();
}

repeater(function () {
  console.log("Hello There");
});

// Callback is the function that get added and get executed later
