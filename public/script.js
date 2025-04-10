const userContainer = document.getElementById("user-container");

function renderUser(user) {
  userContainer.innerHTML = `
    <img 
      src="${user.picture.large}" 
      alt="User Picture" 
      class="w-24 h-24 rounded-full mx-auto mb-4"
    />
    <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
  `;
}

async function fetchUser() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const user = data.results[0];
  renderUser(user);
}

document.getElementById("new-user").addEventListener("click", fetchUser);

// Carrega um usuário assim que a página abre
fetchUser();
