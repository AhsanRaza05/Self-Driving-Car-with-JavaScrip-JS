// Step # 1.3
// Get Reference to Canvas with id myCanvas which we defined preiously in HTML.
const canvas =  document.getElementById("myCanvas");

// Set its height to be the Full window
canvas.height = window.innerHeight;

// Set its width 200 Pixels
canvas.width = 200;

// Step # 1.5: : Draw Car on the Canvas.

// Get the 2D Context of Canvas to draw on Canvas
const ctx = canvas.getContext("2d");

// Create a Car with 100x, 100y, 30 width & 50 Height.
const car = new Car(100,100,30,50);

// Draw this Car on Canvas using this context
car.draw(ctx)