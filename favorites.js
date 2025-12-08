window.addEventListener("DOMContentLoaded", async () => {
  const favoriteList = document.getElementById("favoriteList");
  const overlay = document.getElementById("descriptionOverlay");
  const closeOverlay = document.getElementById("closeOverlay");
  
  let allClubs = [];

  // Load all clubs data from clubs.json
  async function loadAllClubs() {
    try {
      const response = await fetch("clubs.json");
      allClubs = await response.json();
    } catch (error) {
      console.error("Error loading clubs:", error);
      allClubs = [];
    }
  }

  // Get full club data by club name
  function getFullClubData(clubName) {
    return allClubs.find(club => club.club === clubName) || null;
  }

  function renderFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favoriteList.innerHTML = "";

    if (favorites.length === 0) {
      favoriteList.innerHTML = "<p class='no-results'>No favorites saved yet.</p>";
      return;
    }

    favorites.forEach(fav => {
      const fullClubData = getFullClubData(fav.club);
      const club = fullClubData || fav;

      const li = document.createElement("li");
      li.classList.add("club-box");
      li.innerHTML = `
        <img 
          src="goldStar.jpeg" 
          alt="favorite star" 
          class="favorite-star" 
          style="width:25px; height:25px; cursor:pointer;"
        >
        <h3 class="clubBoxesFontSize">${club.club}</h3>
        <p class="clubBoxesFontSize">${club.staff}</p>
        <p class="clubBoxesEmailSize">${club.email}</p>
      `;

      const star = li.querySelector(".favorite-star");
      star.addEventListener("click", (e) => {
        e.stopPropagation();
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites = favorites.filter(f => f.club !== fav.club);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        renderFavorites();
      });

      li.addEventListener("click", () => {
        const fullData = getFullClubData(club.club) || club;
        
        // Check if elements exist before setting content
        const overlayTitle = document.getElementById("overlayTitle");
        const overlayStaff = document.getElementById("overlayStaff");
        const overlayEmail = document.getElementById("overlayEmail");
        const overlayDescription = document.getElementById("overlayDescription");
        
        if (overlayTitle) overlayTitle.textContent = fullData.club || "No title available";
        if (overlayStaff) overlayStaff.textContent = `Staff: ${fullData.staff || "Not available"}`;
        if (overlayEmail) overlayEmail.textContent = `Email: ${fullData.email || "Not available"}`;
        
        // Check for optional fields - these might not exist in your favorites page
        const overlayTime = document.getElementById("overlayTime");
        const overlayType = document.getElementById("overlayType");
        const overlayDays = document.getElementById("overlayDays");
        
        if (overlayTime) {
          let timeText = `Time: ${fullData.Time || "Not available"}`;
          if (fullData.Time) timeText += " School";
          overlayTime.textContent = timeText;
        }
        
        if (overlayType) overlayType.textContent = `Type: ${fullData.Type || "Not available"}`;
        if (overlayDays) overlayDays.textContent = `Days: ${fullData.Day || "Not available"}`;
        
        if (overlayDescription) {
          overlayDescription.textContent = fullData.description || "No description available.";
        }

        if (overlay) {
          overlay.classList.remove("hidden");
        }
      });

      favoriteList.appendChild(li);
    });
  }

  await loadAllClubs();
  renderFavorites();

  if (closeOverlay) {
    closeOverlay.addEventListener("click", () => {
      if (overlay) overlay.classList.add("hidden");
    });
  }

  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.classList.add("hidden");
    });
  }
});