// JavaScript code can be added here
console.log("Page loaded");
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
});
// Example of a simple function
function greet() {
    alert("Hello, welcome to my web page!");
}
// Call the greet function when the page loads
window.onload = greet;
