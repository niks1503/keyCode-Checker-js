document.onkeydown = checkKeycode;
const heading = document.querySelector(".init-heading");
const number_div = document.querySelector(".number");
function changeHeading(keyName, keyCode) {
  heading.textContent = `Key Pressed ${keyName}`; // Update the heading with key name and key code

  // Assign a class name to the created div
  number_div.innerText = `${keyCode}`; // Set the content to display both key name and code
  // Append the number div to the document body
}

function checkKeycode(e) {
  const keyName = e.key; // Get the key's name (like "A", "B", "Enter")
  const keyCode = e.keyCode; // Get the key's numeric code
  changeHeading(keyName, keyCode); // Pass both keyName and keyCode to changeHeading
}
