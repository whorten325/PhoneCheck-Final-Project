async function validatePhone() {
  const phone = document.getElementById("phone").value;

  const res = await fetch("/api/validate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone })
  });

  const data = await res.json();
  document.getElementById("result").innerText =
    data.valid ? "Valid number" : "Invalid number";

  loadRecent();
}

async function loadRecent() {
  const res = await fetch("/api/searches");
  const data = await res.json();

  const ul = document.getElementById("recent");
  ul.innerHTML = "";

  data.forEach(d => {
    const li = document.createElement("li");
    li.textContent = d.phone_number;
    ul.appendChild(li);
  });
}

loadRecent();
