window.addEventListener("DOMContentLoaded", () => {
  const favoriteList = document.getElementById("favoriteList");

  function renderFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favoriteList.innerHTML = ""; // clear old content

    favorites.forEach(fav => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img 
          src="goldStar.jpeg" 
          alt="favorite star" 
          class="favorite-star" 
          style="width:25px; height:25px; cursor:pointer;"
        >
        <h3 class="clubBoxesFontSize">${fav.club}</h3>
        <p class="clubBoxesFontSize">${fav.staff}</p>
        <p class="clubBoxesEmailSize">${fav.email}</p>
      `;

      const star = li.querySelector(".favorite-star");
      star.addEventListener("click", () => {
        // Remove this club from localStorage
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites = favorites.filter(f => f.club !== fav.club);
        localStorage.setItem("favorites", JSON.stringify(favorites));

        // Re-render list so it disappears immediately
        renderFavorites();
      });

      favoriteList.appendChild(li);
    });
  }

  renderFavorites();
});