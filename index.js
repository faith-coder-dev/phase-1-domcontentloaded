// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  const paragraph = document.getElementById("text");
  paragraph.textContent = "This is really cool!";
  console.log("The DOM has loaded and the text has been changed");
});

console.log("This runs immediately when index.js loads");
