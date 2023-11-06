// Function to generate and retrieve a unique user token
function getUserToken() {
  let userToken = localStorage.getItem("userToken");
  if (!userToken) {
    userToken = Math.random().toString(36).substr(2);
    localStorage.setItem("userToken", userToken);
  }
  return userToken;
}

// Function to generate a random number based on the user token
function generateRandomNumber(userToken) {
  const seed = parseInt(userToken, 36);
  const randomNumber = Math.floor(seed * 9000000000) + 1000000000;
  return randomNumber;
}

// Function to hide the warning and show the random number container
function hideWarning() {
  const warning = document.querySelector('.warning');
  const randomNumberContainer = document.querySelector('.random-number-container');

  warning.style.display = 'none';
  randomNumberContainer.style.display = 'block';
}

// Event listener for the "Proceed" button
document.getElementById('proceedBtn').addEventListener('click', function() {
  hideWarning();

  // Generate user token and use it to generate the random number
  const userToken = getUserToken();
  const randomNumber = generateRandomNumber(userToken);

  // Display the random number on the site
  document.getElementById('randomNumber').textContent = randomNumber;

  // Call the function to track and store the visit count
  trackVisitCount();
});

// Function to track and store the visit count
function trackVisitCount() {
  let visitCount = localStorage.getItem("visitCount");
  visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
  localStorage.setItem("visitCount", visitCount);
  console.log("Site has been opened " + visitCount + " times.");
}

// Generate user token and use it to generate the random number
const userToken = getUserToken();
const randomNumber = generateRandomNumber(userToken);

// Display the random number on the site
document.getElementById('randomNumber').textContent = randomNumber;

// Call the function to track and store the visit count
trackVisitCount();
