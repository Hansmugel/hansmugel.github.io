// Function to generate a unique user token
function generateUserToken() {
    // Check if the user token is already stored in localStorage
    let userToken = localStorage.getItem("userToken");

    // If user token is not found, generate a new one
    if (!userToken) {
        userToken = Math.random().toString(36).substr(2);
        localStorage.setItem("userToken", userToken);
    }

    return userToken;
}

// Function to generate a random number based on the user token
function generateRandomNumber(userToken) {
    // Generate a consistent random number based on the user token
    const seed = parseInt(userToken, 36);
    const randomNumber = Math.floor(seed * 9000000000) + 1000000000;

    // Display the random number on the site
    document.getElementById("randomNumber").textContent = randomNumber;
}

// Generate and use the user token to generate the random number
const userToken = generateUserToken();
generateRandomNumber(userToken);

// Function to track and display the visit count
function trackVisitCount() {
    // Check if the visit count is already stored in localStorage
    let visitCount = localStorage.getItem("visitCount");

    // If visit count is not found, set it to 1, otherwise increment it
    visitCount = visitCount ? parseInt(visitCount) + 1 : 1;

    // Store the updated visit count in localStorage
    localStorage.setItem("visitCount", visitCount);

    // Display the visit count on the site
    console.log("Site has been opened " + visitCount + " times.");
}

// Call the trackVisitCount function to track and display the visit count
trackVisitCount();
