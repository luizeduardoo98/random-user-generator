async function fetchRandomUser() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const user = data.results[0];

  const userContainer = document.getElementById("user-container");
  userContainer.innerHTML = `
    <img src="${user.picture.large}" alt="User Picture">
    <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
  `;
}

document.getElementById("new-user").addEventListener("click", fetchRandomUser);

// Load first user on page load
fetchRandomUser();
