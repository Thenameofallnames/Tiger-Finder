const firebaseConfig = {
  apiKey: "AIzaSyAaSUsD-aGYWvDL_k33U9gbU5gAyhJrmHY",
  authDomain: "tiger-finder.firebaseapp.com",
  projectId: "tiger-finder",
  storageBucket: "tiger-finder.firebasestorage.app",
  messagingSenderId: "435287914958",
  appId: "1:435287914958:web:5d9b1f494f40f86307939f",
  measurementId: "G-MYDZG3038D"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();


let clubs = [];
let currentUser = null;
let userFavorites = [];


async function loadClubs() {
  const response = await fetch("clubs.json");
  clubs = await response.json();


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


async function loadUserFavorites() {
  if (!auth.currentUser) {
    userFavorites = [];
    return;
  }

  try {
    const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();

    if (userDoc.exists) {
      userFavorites = userDoc.data().favorites || [];
    } else {
      userFavorites = [];
    }


    if (document.getElementById("clubList")) {
      createClubs();
    }

  } catch (error) {
    console.error("Error loading favorites:", error);
    userFavorites = [];
  }
}

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


  filteredClubs.forEach(club => {
    const liElement = document.createElement("li");
    liElement.classList.add("club-box");

    liElement.innerHTML = `
      <img 
        src="star.png" 
        alt="favorite star" 
        class="favorite-star" 
        style="width:25px; height:25px; cursor:pointer;"
        data-club="${club.club}"
      >
      <h3 class="clubBoxesFontSize">${club.club}</h3>
      <p class="clubBoxesFontSize">${club.staff}</p>
      <p class="clubBoxesEmailSize">${club.email}</p>
    `;

    const star = liElement.querySelector(".favorite-star");


    if (userFavorites.some(fav => fav.club === club.club)) {
      star.src = "goldStar.jpeg";
      star.classList.add("favorited");
    }


    star.addEventListener("click", async (e) => {
      e.stopPropagation();
      const target = e.target;


      if (!auth.currentUser) {
        alert("Please login to save favorites!");
        return;
      }

      target.classList.toggle("favorited");

      try {
        const userRef = db.collection('users').doc(auth.currentUser.uid);

        if (target.classList.contains("favorited")) {

          target.src = "goldStar.jpeg";

          await userRef.set({
            favorites: firebase.firestore.FieldValue.arrayUnion({
              club: club.club,
              staff: club.staff,
              email: club.email,
              Type: club.Type,
              Time: club.Time,
              Day: club.Day,
              description: club.description
            })
          }, { merge: true });

        } else {

          target.src = "star.png";

          await userRef.set({
            favorites: firebase.firestore.FieldValue.arrayRemove({
              club: club.club,
              staff: club.staff,
              email: club.email,
              Type: club.Type,
              Time: club.Time,
              Day: club.Day,
              description: club.description
            })
          }, { merge: true });
        }


        await loadUserFavorites();

      } catch (error) {
        console.error("Error updating favorites:", error);
        alert("Error saving favorite. Please try again.");
        target.classList.toggle("favorited");
      }
    });


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


function showFavoritesOnly() {
  if (!auth.currentUser) {
    alert("Please login to view favorites!");
    return;
  }

  const clubList = document.getElementById("clubList");
  clubList.innerHTML = "";

  if (userFavorites.length === 0) {
    clubList.innerHTML = "<p class='no-results'>No favorites saved yet.</p>";
    return;
  }


  userFavorites.forEach(favClub => {
    const liElement = document.createElement("li");
    liElement.classList.add("club-box");

    liElement.innerHTML = `
      <img 
        src="goldStar.jpeg" 
        alt="favorite star" 
        class="favorite-star favorited" 
        style="width:25px; height:25px; cursor:pointer;"
        data-club="${favClub.club}"
      >
      <h3 class="clubBoxesFontSize">${favClub.club}</h3>
      <p class="clubBoxesFontSize">${favClub.staff}</p>
      <p class="clubBoxesEmailSize">${favClub.email}</p>
    `;

    const star = liElement.querySelector(".favorite-star");


    star.addEventListener("click", async (e) => {
      e.stopPropagation();
      const target = e.target;

      if (!auth.currentUser) {
        alert("Please login to modify favorites!");
        return;
      }

      try {
        const userRef = db.collection('users').doc(auth.currentUser.uid);


        target.src = "star.png";
        target.classList.remove("favorited");

        await userRef.set({
          favorites: firebase.firestore.FieldValue.arrayRemove({
            club: favClub.club,
            staff: favClub.staff,
            email: favClub.email,
            Type: favClub.Type,
            Time: favClub.Time,
            Day: favClub.Day,
            description: favClub.description
          })
        }, { merge: true });


        await loadUserFavorites();
        showFavoritesOnly();

      } catch (error) {
        console.error("Error removing favorite:", error);
        alert("Error removing favorite. Please try again.");
      }
    });


    liElement.addEventListener("click", () => {
      document.getElementById("overlayTitle").textContent = favClub.club || "No title available";
      document.getElementById("overlayStaff").textContent = `Staff: ${favClub.staff || "Not available"}`;
      document.getElementById("overlayEmail").textContent = `Email: ${favClub.email || "Not available"}`;

      let timeText = `Time: ${favClub.Time || "Not available"}`;
      if (favClub.Time) timeText += " School";

      document.getElementById("overlayTime").textContent = timeText;
      document.getElementById("overlayType").textContent = `Type: ${favClub.Type || "Not available"}`;
      document.getElementById("overlayDays").textContent = `Days: ${favClub.Day || "Not available"}`;
      document.getElementById("overlayDescription").textContent = favClub.description || "No description available.";

      document.getElementById("descriptionOverlay").classList.remove("hidden");
    });

    clubList.appendChild(liElement);
  });
}


document.addEventListener("DOMContentLoaded", () => {

  loadClubs();


  auth.onAuthStateChanged((user) => {
    currentUser = user;
    if (user) {

      loadUserFavorites();


      const favoritesBtn = document.getElementById("showFavoritesBtn");
      if (favoritesBtn) {
        favoritesBtn.classList.remove("hidden");
        favoritesBtn.addEventListener("click", showFavoritesOnly);
      }


      const backBtn = document.getElementById("backToAllClubs");
      if (backBtn) {
        backBtn.classList.remove("hidden");
        backBtn.addEventListener("click", () => {
          createClubs();
        });
      }
    } else {

      userFavorites = [];


      const favoritesBtn = document.getElementById("showFavoritesBtn");
      if (favoritesBtn) {
        favoritesBtn.classList.add("hidden");
      }
    }
  });


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
