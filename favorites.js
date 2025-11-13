window.addEventListener("DOMContentLoaded", () => {
  const favoriteList = document.getElementById("favoriteList");
  const overlay = document.getElementById("descriptionOverlay");
  const closeOverlay = document.getElementById("closeOverlay");

  function renderFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favoriteList.innerHTML = ""; // clear old content

    favorites.forEach(fav => {
      const li = document.createElement("li");
      li.classList.add("club-box"); // match main page style
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
      star.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent opening overlay
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites = favorites.filter(f => f.club !== fav.club);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        renderFavorites(); // refresh list
      });

      // 📦 Add overlay click event (same as main page)
      li.addEventListener("click", () => {
        document.getElementById("overlayTitle").textContent = fav.club;
        document.getElementById("overlayStaff").textContent = `Staff: ${fav.staff}`;
        document.getElementById("overlayEmail").textContent = `Email: ${fav.email}`;
        document.getElementById("overlayDescription").textContent =
          fav.description || "No description available.";

        overlay.classList.remove("hidden");
      });

      favoriteList.appendChild(li);
    });
  }

  renderFavorites();

  // close overlay when X is clicked
  closeOverlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
  });

  // close overlay when clicking outside box
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.add("hidden");
  });
});
