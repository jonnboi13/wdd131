const yearSpan = document.getElementById("currentyear");
const lastModifiedSpan = document.getElementById("lastModified");

// Get current year
const currentYear = new Date().getFullYear();

// Set the content of the yearSpan element
yearSpan.textContent = currentYear;

// Get current date and time
const now = new Date();

// Format the date and time (including seconds)
const formattedDateTime = now.toLocaleString('en-US', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});  

// Set the content of the lastModifiedSpan element
lastModifiedSpan.textContent = formattedDateTime;
