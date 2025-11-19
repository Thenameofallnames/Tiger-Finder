let clubs = [];

// Load JSON & sort
async function loadClubs() {
  const response = await fetch("clubs.json");
  clubs = await response.json();

  // Sort clubs
  clubs.sort((a, b) => {
    const nameA = a.club.toLowerCase();
    const nameB = b.club.toLowerCase();

    const Astart = /^\d/.test(nameA);
    const Bstart = /^\d/.test(nameB);

    if (Astart && !Bstart) return -1;
    if (!Astart && Bstart) return 1;
    return nameA.localeCompare(nameB);
  });

  createClubs();
}

//filters
function createClubs() {
  const clubList = document.getElementById("clubList");
  clubList.innerHTML = "";

  const selectedTypes = [];
  const selectedTimes = [];
  const selectedDays = [];

 
  if (document.getElementById("checkboxAcademic").checked) selectedTypes.push("Academic");
  if (document.getElementById("checkboxService").checked) selectedTypes.push("Service");
  if (document.getElementById("checkboxSports").checked) selectedTypes.push("Sports");
  if (document.getElementById("checkboxArt").checked) selectedTypes.push("Arts");
  if (document.getElementById("checkboxGames").checked) selectedTypes.push("Games");

  
  if (document.getElementById("checkboxBefore").checked) selectedTimes.push("Before");
  if (document.getElementById("checkboxAfter").checked) selectedTimes.push("After");


  if (document.getElementById("checkboxMonday").checked) selectedDays.push("Monday");
  if (document.getElementById("checkboxTuesday").checked) selectedDays.push("Tuesday");
  if (document.getElementById("checkboxWednesday").checked) selectedDays.push("Wednesday");
  if (document.getElementById("checkboxThursday").checked) selectedDays.push("Thursday");
  if (document.getElementById("checkboxFriday").checked) selectedDays.push("Friday");
  if (document.getElementById("checkboxWeekend").checked) selectedDays.push("Weekend");

  const anyFilters = selectedTypes.length || selectedTimes.length || selectedDays.length;

  // Filter clubs
  const filteredClubs = anyFilters
    ? clubs.filter(club =>
        (selectedTypes.length === 0 || selectedTypes.includes(club.Type)) &&
        (selectedTimes.length === 0 || selectedTimes.includes(club.Time)) &&
        (selectedDays.length === 0 || selectedDays.includes(club.Day))
      )
    : clubs.slice();

  if (filteredClubs.length === 0) {
    clubList.innerHTML = "<p class='no-results'>No clubs found.</p>";
    return;
  }

  //  elements
  filteredClubs.forEach(club => {
    const liElement = document.createElement("li");
    liElement.classList.add("club-box");

    liElement.innerHTML = `
      <img 
        src="star.png" 
        alt="favorite star" 
        class="favorite-star" 
        style="width:25px; height:25px; cursor:pointer;"
      >
      <h3 class="clubBoxesFontSize">${club.club}</h3>
      <p class="clubBoxesFontSize">${club.staff}</p>
      <p class="clubBoxesEmailSize">${club.email}</p>
    `;

    const star = liElement.querySelector(".favorite-star");
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // fav clubs
    if (favorites.some(fav => fav.club === club.club)) {
      star.src = "goldStar.jpeg";
      star.classList.add("favorited");
    }

    // Favorite toggle
    star.addEventListener("click", (e) => {
      e.stopPropagation();
      const target = e.target;
      let favs = JSON.parse(localStorage.getItem("favorites")) || [];

      target.classList.toggle("favorited");

      if (target.classList.contains("favorited")) {
        target.src = "goldStar.jpeg";
        if (!favs.some(fav => fav.club === club.club)) favs.push(club);
      } else {
        target.src = "star.png";
        favs = favs.filter(fav => fav.club !== club.club);
      }

      localStorage.setItem("favorites", JSON.stringify(favs));
    });

    // Description overlay
    liElement.addEventListener("click", () => {
      document.getElementById("overlayTitle").textContent = club.club || "No title available";
      document.getElementById("overlayStaff").textContent = `Staff: ${club.staff || "Not available"}`;
      document.getElementById("overlayEmail").textContent = `Email: ${club.email || "Not available"}`;

      let timeText = `Time: ${club.Time || "Not available"}`;
      if (club.Time) timeText += " School";

      document.getElementById("overlayTime").textContent = timeText;
      document.getElementById("overlayType").textContent = `Type: ${club.Type || "Not available"}`;
      document.getElementById("overlayDays").textContent = `Days: ${club.Day || "Not available"}`;
      document.getElementById("overlayDescription").textContent = club.description || "No description available.";

      document.getElementById("descriptionOverlay").classList.remove("hidden");
    });

    clubList.appendChild(liElement);
  });
}

// Initial page load
document.addEventListener("DOMContentLoaded", () => {
  loadClubs(); 


  document.querySelectorAll('input[type=checkbox]').forEach(cb => {
    cb.addEventListener("change", () => {
      localStorage.setItem(cb.id, cb.checked);
      createClubs();
    });

  
    const saved = localStorage.getItem(cb.id);
    if (saved !== null) cb.checked = saved === "true";
  });

  const overlay = document.getElementById("descriptionOverlay");
  const closeOverlay = document.getElementById("closeOverlay");

  closeOverlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
  });

  
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.add("hidden");
  });
});
