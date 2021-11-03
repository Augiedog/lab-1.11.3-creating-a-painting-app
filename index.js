let brush = 'black'
const painting = document.querySelector('.painting')
console.log(brush)

painting.addEventListener('click', function(e){
  e.target.style.backgroundColor = brush  
})  
// Now, you can change the selectedColor variable (either in your code or in your console) to change the color pixels turn when you click them.

let palette = document.querySelectorAll('.color-choice')
for(let i = 0; i < palette.length; i++){
  palette[i].addEventListener('click', function () {
    brush = palette[i].id
    console.log(brush)
  })
}


// 7) Implement the Color Palette
// Now that we can draw on the painting, let's add a feature so the user can change the color they draw with.

// When the page loads, the user should start drawing in blue.

// If they click one of the colored boxes in the palette div, they should begin drawing with whatever color they clicked.

// Use a combination of DOM querying methods and event listeners to track when the user clicks one of the colored boxes, and update the selectedColor variable accordingly.

// There are a lot of ways to go about this. Don't stress over figuring out the best solution. Just plan one that makes sense for you and go for it.
// Bonus
// Here are a couple of bonus features to try to implement if you have time:

// When the user double-clicks a pixel, turn it white.
// Add the color purple (you may need to check out assets/styles.css to implement this).
// Add a Clear button, which sets every pixel's color to white when clicked.