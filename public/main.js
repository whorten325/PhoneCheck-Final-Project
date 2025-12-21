// main.js

// Load recent searches from localStorage
function loadRecent() {
  const recent = JSON.parse(localStorage.getItem("recentSearches") || "[]");
  const ul = document.getElementById("recent");
  ul.innerHTML = "";

  recent.forEach(phone => {
    const li = document.createElement("li");
    li.textContent = phone;
    ul.appendChild(li);
  });
}

// Save a new phone to recent searches
function saveRecent(phone) {
  const recent = JSON.parse(localStorage.getItem("recentSearches") || "[]");

  // Add new number to the front
  recent.unshift(phone);

  // Keep only last 10 searches
  if (recent.length > 10) recent.pop();

  localStorage.setItem("recentSearches", JSON.stringify(recent));
}

// Validate phone number when button is clicked
function validatePhone() {
  const phone = document.getElementById("phone").value.trim();

  // Simple US phone number validation regex
  const valid = /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(phone);

  const resultDiv = document.getElementById("result");
  if (valid) {
    resultDiv.textContent = "✅ Valid number!";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = "❌ Invalid number!";
    resultDiv.style.color = "red";
  }

  // Save to recent searches
  if (phone) saveRecent(phone);
  loadRecent();
}

// Load recent searches when page loads
window.onload = loadRecent;
