function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("show");
}

function sendMessage(event) {
  event.preventDefault();
  alert("Thank you! Your message has been submitted.");
}