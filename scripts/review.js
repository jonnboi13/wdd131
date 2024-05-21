window.onload = function() {
    // Check if a counter already exists in localStorage
    let counter = localStorage.getItem('reviewCounter');

    // If it doesn't exist, initialize it to 0
    if (counter === null) {
        counter = 0;
    } else {
        // If it does exist, parse it to an integer and increment it by 1
        counter = parseInt(counter) + 1;
    }

    // Store the updated counter back to localStorage
    localStorage.setItem('reviewCounter', counter);
}