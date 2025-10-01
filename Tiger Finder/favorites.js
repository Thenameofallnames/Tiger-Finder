window.addEventListener("DOMContentLoaded", () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoriteList = document.getElementById("favoriteList"); // ul or div

  favorites.forEach(fav => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3 class="clubBoxesFontSize">${fav.club}</h3>
      <p class="clubBoxesFontSize">${fav.staff}</p>
      <p class="clubBoxesEmailSize">${fav.email}</p>
    `;
    favoriteList.appendChild(li);
  });
});