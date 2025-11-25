//dropdown menu function
function dropDown() {
    const nav = document.querySelector('nav');
    const main = document.querySelector(".blur");
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
        document.getElementById('dropDownButton').style.color = '';
        document.getElementById('dropDownButton').style.borderColor = '';
                document.getElementById('dropDownButton').innerHTML = '<img src="dropdownMain.png" id="dropDownImage"> Menu';
        main.style.filter = 'none';
    } else {
        nav.style.display = 'block';
        document.getElementById('dropDownButton').style.color = '#db0032';
        document.getElementById('dropDownButton').style.borderColor = '#db0032';
        document.getElementById('dropDownButton').innerHTML = '<img src="images/menuClose.png" id="dropDownImage"> Close';
        main.style.filter = 'blur(5px)';
    }
}

let clubs = []; 

// Load JSON & sort
async function loadClubs() {
    try {
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
        
        console.log("Clubs loaded successfully:", clubs.length);
    } catch (error) {
        console.error("Error loading clubs:", error);
    }
}

const selectedTypes = [];
const selectedTimes = [];
const selectedDays = [];

function checkClickedQ1() {
  selectedTypes.length = 0; 

    const academic = document.getElementById("academic");
    const volunteer = document.getElementById("volunteer");
    const arts = document.getElementById("arts");
    const sports = document.getElementById("sports");
    const games = document.getElementById("games");
    const ans1 = document.getElementById("1");
    const ans2 = document.getElementById("2");
    const ans3 = document.getElementById("3");
    const ans4 = document.getElementById("4");
    const ans5 = document.getElementById("5");

        if (arts && arts.checked) {
          selectedTypes.push("Arts");
          if (ans2) {
            ans2.style.color = "#99001c";
            ans2.style.borderColor = "#99001c";
          }
        } else {
          if (ans2) {
            ans2.style.color = "";
            ans2.style.borderColor = "";
          }
        }

        if (sports && sports.checked) { 
          selectedTypes.push("Sports"); 
          if (ans1) {
            ans1.style.color = "#99001c";
            ans1.style.borderColor = "#99001c";
          }
        } else {
          if (ans1) {
            ans1.style.color = "";
            ans1.style.borderColor = "";
          }
        }

        if (games && games.checked) {
          selectedTypes.push("Games"); 
          if (ans3) {
            ans3.style.color = "#99001c";
            ans3.style.borderColor = "#99001c";
          }
        } else {
          if (ans3) {
            ans3.style.color = "";
            ans3.style.borderColor = "";
          }
        }

        if (academic && academic.checked) {
          selectedTypes.push("Academic");
          if (ans4) {
            ans4.style.color = "#99001c";
            ans4.style.borderColor = "#99001c";
          }
        } else {
          if (ans4) {
            ans4.style.color = "";
            ans4.style.borderColor = "";
          }
        }

        if (volunteer && volunteer.checked) {
          selectedTypes.push("Service");
          if (ans5) {
            ans5.style.color = "#99001c";
            ans5.style.borderColor = "#99001c";
          }
        } else {
          if (ans5) {
            ans5.style.color = "";
            ans5.style.borderColor = "";
          }
        }
}

function checkClickedQ2(){
  selectedTimes.length = 0;

    const mornings = document.getElementById("mornings");
    const afternoons = document.getElementById("afternoons");
    const ans6 = document.getElementById("6");
    const ans7 = document.getElementById("7");

    if (mornings && mornings.checked) {
      selectedTimes.push("Before");
      if (ans6) {
        ans6.style.color = "#99001c";
        ans6.style.borderColor = "#99001c";
      }
    } else {
      if (ans6) {
        ans6.style.color = "";
        ans6.style.borderColor = "";
      }
    }

    if (afternoons && afternoons.checked) {
      selectedTimes.push("After");
      if (ans7) {
        ans7.style.color = "#99001c";
        ans7.style.borderColor = "#99001c";
      }
    } else {
      if (ans7) {
        ans7.style.color = "";
        ans7.style.borderColor = "";
      }
    }
}

function checkClickedQ3(){
  selectedDays.length = 0; 

    const mondays = document.getElementById("monday");
    const tuesdays = document.getElementById("tuesday");
    const wednesdays = document.getElementById("wednesday");
    const thursdays = document.getElementById("thursday");
    const fridays = document.getElementById("friday");
    const weekends = document.getElementById("weekend");
    const ans8 = document.getElementById("8");
    const ans9 = document.getElementById("9");
    const ans10 = document.getElementById("10");
    const ans11 = document.getElementById("11");
    const ans12 = document.getElementById("12");
    const ans13 = document.getElementById("13");

    if (mondays && mondays.checked) {
      selectedDays.push("Monday");
      if (ans8) {
        ans8.style.color = "#99001c";
        ans8.style.borderColor = "#99001c";
      }
    } else {
      if (ans8) {
        ans8.style.color = "";
        ans8.style.borderColor = "";
      }
    }

    if (tuesdays && tuesdays.checked) {
      selectedDays.push("Tuesday");
      if (ans9) {
        ans9.style.color = "#99001c";
        ans9.style.borderColor = "#99001c";
      }
    } else {
      if (ans9) {
        ans9.style.color = "";
        ans9.style.borderColor = "";
      }
    }

    if (wednesdays && wednesdays.checked) {
      selectedDays.push("Wednesday");
      if (ans10) {
        ans10.style.color = "#99001c";
        ans10.style.borderColor = "#99001c";
      }
    } else {
      if (ans10) {
        ans10.style.color = "";
        ans10.style.borderColor = "";
      }
    }

    if (thursdays && thursdays.checked) {
      selectedDays.push("Thursday");
      if (ans11) {
        ans11.style.color = "#99001c";
        ans11.style.borderColor = "#99001c";
      }
    } else {
      if (ans11) {
        ans11.style.color = "";
        ans11.style.borderColor = "";
      }
    }

    if (fridays && fridays.checked) {
      selectedDays.push("Friday");
      if (ans12) {
        ans12.style.color = "#99001c";
        ans12.style.borderColor = "#99001c";
      }
    } else {
      if (ans12) {
        ans12.style.color = "";
        ans12.style.borderColor = "";
      }
    }

    if (weekends && weekends.checked) {
      selectedDays.push("Weekend");
      if (ans13) {
        ans13.style.color = "#99001c";
        ans13.style.borderColor = "#99001c";
      }
    } else {
      if (ans13) {
        ans13.style.color = "";
        ans13.style.borderColor = "";
      }
    }
}

async function results() {
    console.log("Results button clicked");
    

    if (clubs.length === 0) {
        await loadClubs();
    }
    
    console.log("Selected Types:", selectedTypes);
    console.log("Selected Times:", selectedTimes);
    console.log("Selected Days:", selectedDays);
    
    createClubs(selectedTypes, selectedTimes, selectedDays);
    const resultsSection = document.getElementById("resultsSection");
    if (resultsSection) {
        resultsSection.style.display = "block";
        resultsSection.scrollIntoView({ behavior: "smooth" });
    }
}

function createClubs(selectedTypes = [], selectedTimes = [], selectedDays = []) {

  const clubList = document.getElementById("clubList");
  if (!clubList) {
    console.error("clubList element not found");
    return;
  }
  
  clubList.innerHTML = "";

  console.log("Total clubs:", clubs.length);
  console.log("Filters - Types:", selectedTypes, "Times:", selectedTimes, "Days:", selectedDays);

  const filteredClubs = clubs.filter(club => {
 
    if (selectedTypes.length === 0 && selectedTimes.length === 0 && selectedDays.length === 0) {
      return true;
    }
    
    const typeMatch = selectedTypes.length === 0 || 
                     (club.Type && selectedTypes.includes(club.Type));
    
   
    const timeMatch = selectedTimes.length === 0 ||
                     (club.Time && selectedTimes.includes(club.Time));
    
   
    const dayMatch = selectedDays.length === 0 ||
                    (club.Day && selectedDays.includes(club.Day));
    
    console.log(`Club: ${club.club}, Type: ${club.Type}, Time: ${club.Time}, Day: ${club.Day}, Matches: ${typeMatch && timeMatch && dayMatch}`);
    
    return typeMatch && timeMatch && dayMatch;
  });

  console.log("Filtered clubs:", filteredClubs.length);

  // If no clubs match filters, show message
  if (filteredClubs.length === 0) {
    clubList.innerHTML = "<p class='no-results' style='color: white; font-size: 3vh;'>No Clubs Found</p>";
    return;
  }

  filteredClubs.forEach(club => {
    const liElement = document.createElement("li");
    liElement.classList.add("club-box");
    liElement.style.cursor = "pointer"; 
    liElement.style.position = "relative"; 

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

    // Description 
    liElement.addEventListener("click", function(e) {
 
      if (e.target.classList.contains('favorite-star')) {
        return;
      }
      
      const overlayTitle = document.getElementById("overlayTitle");
      const overlayStaff = document.getElementById("overlayStaff");
      const overlayEmail = document.getElementById("overlayEmail");
      const overlayTime = document.getElementById("overlayTime");
      const overlayType = document.getElementById("overlayType");
      const overlayDays = document.getElementById("overlayDays");
      const overlayDescription = document.getElementById("overlayDescription");
      const descriptionOverlay = document.getElementById("descriptionOverlay");

      if (overlayTitle) overlayTitle.textContent = club.club || "No title available";
      if (overlayStaff) overlayStaff.textContent = `Staff: ${club.staff || "Not available"}`;
      if (overlayEmail) overlayEmail.textContent = `Email: ${club.email || "Not available"}`;

      let timeText = `Time: ${club.Time || "Not available"}`;
      if (club.Time) { 
        timeText += " School"; 
      }
      if (overlayTime) overlayTime.textContent = timeText;

      if (overlayType) overlayType.textContent = `Type: ${club.Type || "Not available"}`;
      if (overlayDays) overlayDays.textContent = `Days: ${club.Day || "Not available"}`;
      if (overlayDescription) overlayDescription.textContent = club.description || "No description available.";

      if (descriptionOverlay) {
        descriptionOverlay.classList.remove("hidden");
      }
    });

    clubList.appendChild(liElement);
  });

  // Set up overlay events
  const overlay = document.getElementById("descriptionOverlay");
  const closeOverlay = document.getElementById("closeOverlay");

  if (closeOverlay) {
    closeOverlay.addEventListener("click", function() {
      if (overlay) overlay.classList.add("hidden");
    });
  }

  if (overlay) {
    overlay.addEventListener("click", function(e) {
      if (e.target === overlay) overlay.classList.add("hidden");
    });
  }
}


document.addEventListener("DOMContentLoaded", async function() {
 
  await loadClubs();
 
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  
  checkboxes.forEach(cb => {
   
    const saved = localStorage.getItem(cb.id);
    if (saved !== null) cb.checked = saved === "true";
    
    
    cb.addEventListener("change", function() {
      localStorage.setItem(cb.id, cb.checked);
      
      
      if (cb.id.includes("academic") || cb.id.includes("volunteer") || cb.id.includes("arts") || cb.id.includes("sports") || cb.id.includes("games")) {
        checkClickedQ1();
      } else if (cb.id.includes("mornings") || cb.id.includes("afternoons")) {
        checkClickedQ2();
      } else if (cb.id.includes("monday") || cb.id.includes("tuesday") || cb.id.includes("wednesday") || cb.id.includes("thursday") || cb.id.includes("friday") || cb.id.includes("weekend")) {
        checkClickedQ3();
      }
    });
  });

  checkClickedQ1();
  checkClickedQ2();
  checkClickedQ3();
});


window.dropDown = dropDown;
window.checkClickedQ1 = checkClickedQ1;
window.checkClickedQ2 = checkClickedQ2;
window.checkClickedQ3 = checkClickedQ3;
window.results = results;