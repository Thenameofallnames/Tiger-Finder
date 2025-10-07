function createClubs() {
  const clubList = document.getElementById("clubList");

  const clubs = [
  {"staff": "Antoni, Austin", "club": "Rugby (Girls)", "email": "austinantoni@gmail.com","description": "hi this is a description"},
  {"staff": "Armey, Julie", "club": "Orchestra Club", "email": "jarmey@hse.k12.in.us"},
  {"staff": "Bandura, Jacob", "club": "", "email": "jbandura@hse.k12.in.us"},
  {"staff": "Barfield, Alexis", "club": "Alaska Native and Native American Club", "email": "abarfield@hse.k12.in.us"},
  {"staff": "Black, Scott", "club": "Asian Student Union", "email": "sdblack@hse.k12.in.us"},
  {"staff": "Bockenfeld, Matt", "club": "Muslim Student Association (MSA)", "email": "mbockenfeld@hse.k12.in.us"},
  {"staff": "Brown, Lisa", "club": "Art Club", "email": "lgbrown@hse.k12.in.us"},
  {"staff": "Buckman, Bill", "club": "Poker Club", "email": "mbuckman@hse.k12.in.us"},
  {"staff": "Carson, Beth", "club": "Care Crafts Project", "email": "acarson@hse.k12.in.us"},
  {"staff": "Chan, Brooke", "club": "Disney Lorcana TCG Club", "email": "bchan@hse.k12.in.us"},
  {"staff": "Chan, Brooke", "club": "Magic: The Gathering", "email": "bchan@hse.k12.in.us"},
  {"staff": "Chop, Dahnya", "club": "French Club", "email": "dchop@hse.k12.in.us"},
  {"staff": "Curtis, Liz", "club": "GSA", "email": "lcurtis@hse.k12.in.us"},
  {"staff": "Curtis, Steven", "club": "Dungeons & Dragons Club", "email": "scurtis@hse.k12.in.us"},
  {"staff": "Czech, Mike", "club": "School of Rock", "email": "mczech@hse.k12.in.us"},
  {"staff": "Delucenay, Katie", "club": "Baking Club", "email": "kdelucenay@hse.k12.in.us"},
  {"staff": "Delucenay, Katie", "club": "Off the Clock (OTC)", "email": "kdelucenay@hse.k12.in.us"},
  {"staff": "Druelinger, Sarah", "club": "Ping Pong Club", "email": "sdruelinger@hse.k12.in.us"},
  {"staff": "Farrand, Angela", "club": "American Sign Language (ASL) Club", "email": "afarrand@hse.k12.in.us"},
  {"staff": "Manoharan, Vennila", "club": "Crochet Club", "email": "vmanoharan@hse.k12.in.us"},
  {"staff": "Ferguson, Heather", "club": "Senior Smile Society", "email": "hferguson@hse.k12.in.us"},
  {"staff": "French, Brigham", "club": "Chess Club", "email": "bfrench@hse.k12.in.us"},
  {"staff": "French, Brigham", "club": "AI Club", "email": "bfrench@hse.k12.in.us"},
  {"staff": "Gardner, Elijah", "club": "Rugby (Girls)", "email": "egardner@hse.k12.in.us"},
  {"staff": "Gastineau, Chelley", "club": "Bring Change to Mind", "email": "cgastineau@hse.k12.in.us"},
  {"staff": "Greisinger, Jessica", "club": "Swiss-Mix Club (formerly German Club)", "email": "jgeisinger@hse.k12.in.us"},
  {"staff": "Geisinger, Robin", "club": "Swiss-Mix Club (formerly German Club)", "email": "rgeisinger@hse.k12.in.us"},
  {"staff": "Goodwin, Danielle", "club": "Unified Dance", "email": "dgoodwin@hse.k12.in.us"},
  {"staff": "Gutting, Stephanie", "club": "Harry Potter Club", "email": "sgutting@hse.k12.in.us"},
  {"staff": "Gutting, Stephanie", "club": "Spanish Club", "email": "sgutting@hse.k12.in.us"},
  {"staff": "Gutting, Stephanie", "club": "Unified Dance", "email": "sgutting@hse.k12.in.us"},
  {"staff": "Hamilton, Terri", "club": "Student Organ Donor Advocates (SODA)", "email": "thamilton@hse.k12.in.us"},
  {"staff": "Harris, Ryan", "club": "Badminton Cub", "email": "rharris@hse.k12.in.us"},
  {"staff": "Harris, Ryan", "club": "Computer Science Club", "email": "rharris@hse.k12.in.us"},
  {"staff": "Harris, Ryan", "club": "Cricket Club", "email": "rharris@hse.k12.in.us"},
  {"staff": "Harris, Ryan", "club": "Desi Student Association", "email": "rharris@hse.k12.in.us"},
  {"staff": "Harris, Ryan", "club": "Sports Trading Card Club", "email": "rharris@hse.k12.in.us"},
  {"staff": "Helmkamp, Michelle", "club": "Spanish Club", "email": "mhelmkamp@hse.k12.in.us"},
  {"staff": "Huppenthal, Suzie", "club": "Do Something Club", "email": "shuppenthal@hse.k12.in.us"},
  {"staff": "Isom, Renee", "club": "3D Printing Club", "email": "risom@hse.k12.in.us"},
  {"staff": "Isom, Renee", "club": "Cultural Connections Club", "email": "risom@hse.k12.in.us"},
  {"staff": "Isom, Renee", "club": "FHS Reads Book Club", "email": "risom@hse.k12.in.us"},
  {"staff": "Isom, Renee", "club": "Future Black Leaders", "email": "risom@hse.k12.in.us"},
  {"staff": "Isom, Renee", "club": "Roll the Tape", "email": "risom@hse.k12.in.us"},
  {"staff": "Jacobs, Kelli", "club": "Anime Club", "email": "kjacobs@hse.k12.in.us"},
  {"staff": "Jordan, Monica", "club": "Rock Climbing Club", "email": "mrjordan@hse.k12.in.us"},
  {"staff": "Kapitan, Jacob", "club": "Bible Study Group", "email": "jkapitan@hse.k12.in.us"},
  {"staff": "Kapitan, Jacob", "club": "Dungeons & Dragons Club", "email": "jkapitan@hse.k12.in.us"},
  {"staff": "Kapitan, Jacob", "club": "E-Sports Club", "email": "jkapitan@hse.k12.in.us"},
  {"staff": "Kapitan, Jacob", "club": "Pokemon Club", "email": "jkapitan@hse.k12.in.us"},
  {"staff": "Keithley, Maxwell", "club": "Environmental Club", "email": "mkeithley@hse.k12.in.us"},
  {"staff": "Kixmiller, Lori", "club": "Student Government (Sponsor)", "email": "lkixmiller@hse.k12.in.us"},
  {"staff": "Knapp, Erin", "club": "2000s Fun!", "email": "eknapp@hse.k12.in.us"},
  {"staff": "Knapp, Erin", "club": "Create for Kids", "email": "eknapp@hse.k12.in.us"},
  {"staff": "Knapp, Erin", "club": "Yoga Club", "email": "eknapp@hse.k12.in.us"},
  {"staff": "Kohler, Chad", "club": "Marching Band", "email": "ckohler@hse.k12.in.us"},
  {"staff": "Horn, Sara", "club": "Women in S.T.E.M.", "email": "shorn@hse.k12.in.us"},
  {"staff": "Kuhn, Lance", "club": "Chemistry Club", "email": "lkuhn@hse.k12.in.us"},
  {"staff": "Laffin, Bill", "club": "Ski Club", "email": "blaffin@hse.k12.in.us"},
  {"staff": "Lawrence, Samuel", "club": "Future Farmers of America (FFA)", "email": "slawrence@hse.k12.in.us"},
  {"staff": "Lidy, Shelley", "club": "Better Help Club", "email": "slidy@hse.k12.in.us"},
  {"staff": "Luna, Madeleine", "club": "Badminton Club", "email": "mluna@hse.k12.in.us"},
  {"staff": "Lyons, Suzanne", "club": "Orchestra Club", "email": "slyons@hse.k12.in.us"},
  {"staff": "Macmillan, Jordan", "club": "FHS \"Pubs\" Club (Publications)", "email": "jmacmillan@hse.k12.in,us"},
  {"staff": "Masterson, Ray", "club": "Music & Sound Recording Club", "email": "rmasterson@hse.k12.in.us"},
  {"staff": "McCabe, Shanna", "club": "CATS (Creating Action Through Service)", "email": "smccabe@hse.k12.in.us"},
  {"staff": "McCabe, Shanna", "club": "FHS Reads Book Club", "email": "smccabe@hse.k12.in.us"},
  {"staff": "Meador, Taylor", "club": "Aura8 Dance Club", "email": "tmeador@hse.k12.in.us"},
  {"staff": "Meador, Taylor", "club": "K-Pop Club", "email": "tmeador@hse.k12.in.us"},
  {"staff": "Meador, Taylor", "club": "ENL Club", "email": "tmeador@hse.k12.in.us"},
  {"staff": "Miller, Audra", "club": "I'm Just a Girl", "email": "almiller@hse.k12.in.us"},
  {"staff": "Noyes, Summer", "club": "Senior Smile Society", "email": "snoyes@hse.k12.in.us"},
  {"staff": "Ondish, Kelsey", "club": "Improv Club", "email": "kondish@hse.k12.in.us"},
  {"staff": "Ondish, Kelsey", "club": "LLS Club (Leukemia & Lymphoma Society)", "email": "kondish@hse.k12.in.us"},
  {"staff": "Paternoster, Liz", "club": "We The People (Head Coach)", "email": "lpaternoster@hse.k12.in.us"},
  {"staff": "Placzek, Sharon", "club": "Hispanic Heritage Club", "email": "splaczek@hse.k12.in.us"},
  {"staff": "Rund, Emma", "club": "Drama Club / Theatre Fishers", "email": "erund@hse.k12.in.us"},
  {"staff": "Schooley, Patrick", "club": "Champions Together", "email": "pschooley@hse.k12.in.us"},
  {"staff": "Schuh, Tori", "club": "Best Buddies", "email": "vschuh@hse.k12.in.us"},
  {"staff": "Schulhof, Beth", "club": "Pickleball Club", "email": "eschulhof@hse.k12.in.us"},
  {"staff": "Seland, Glenn", "club": "Animation Club", "email": "gseland@hse.k12.in.us"},
  {"staff": "Seland, Glenn", "club": "Film Club", "email": "gseland@hse.k12.in.us"},
  {"staff": "Shafer, Gretchen", "club": "Gratitude Bowls", "email": "gshafer@hse.k12.in.us"},
  {"staff": "Shuck, Jamison", "club": "African Association Culture Club", "email": "jshuck@hse.k12.in.us"},
  {"staff": "Smith, Andy", "club": "Tech Crew / Theatre Fishers", "email": "asmith@hse.k12.in.us"},
  {"staff": "Snyder, Tammy", "club": "STEMsters", "email": "tsnyder@hse.k12.in.us"},
  {"staff": "Snyder, Tammy", "club": "CRU (Student Venture)", "email": "tsnyder@hse.k12.in.us"},
  {"staff": "Spencer, Tammie", "club": "Animal Alliance", "email": "tspencer@hse.k12.in.us"},
  {"staff": "Steange, Susanne", "club": "Gymnastics", "email": "strangesusie@gmail.com"},
  {"staff": "Swaim, Matt", "club": "Tiger Ambassadors", "email": "mswaim@hse.k12.in.us"},
  {"staff": "Thomas, William", "club": "East African Student Association", "email": "wthomas@hse.k12.in.us"},
  {"staff": "Thompson-Mejias, Terri", "club": "Euchre Club", "email": "tthompsonmejias@hse.k12.in.us"},
  {"staff": "Thompson-Mejias, Terri", "club": "Latino Student Union", "email": "tthompsonmejias@hse.k12.in.us"},
  {"staff": "Tribolet, Braden", "club": "Tiger Spirit Leaders", "email": "btribolet@hse.k12.in.us"},
  {"staff": "Turner, Dave", "club": "Economics Club", "email": "dturner@hse.k12.in.us"},
  {"staff": "Turner, Dave", "club": "Investment Club", "email": "dturner@hse.k12.in.us"},
  {"staff": "Tysen, Jessica", "club": "Bowling Club", "email": "jessicanstevens@gmail.com"},
  {"staff": "Vanlandingham, Renee", "club": "Fishers Tutors", "email": "rvanlandingham@hse.k12.in.us"},
  {"staff": "VanTrees, Leah", "club": "W.R.I.T.E. Club", "email": "lvantrees@hse.k12.in.us"},
  {"staff": "Vaughn, Alisa", "club": "ENL Math Tutoring", "email": "avaughn@hse.k12.in.us"},
  {"staff": "Votaw, Lauren", "club": "Fellowship of Christian Athletes (FCA)", "email": "lvotaw@hse.k12.in.us"},
  {"staff": "Walker, Sarah", "club": "MED LIFE", "email": "swalker@hse.k12.in.us"},
  {"staff": "Werbe, Jim", "club": "Intramural Basketball", "email": "jwerbe@hse.k12.in.us"},
  {"staff": "White, Jessica", "club": "Key Club", "email": "jlwhite@hse.k12.in.us"},
  {"staff": "Young, Kate", "club": "Million Meal Movement", "email": "kyoung@hse.k12.in.us"}
]

// Sort clubs alphabetically, with numeric names first
clubs.sort((a, b) => {
  const nameA = a.club.toLowerCase();
  const nameB = b.club.toLowerCase();

  const startsWithNumberA = /^\d/.test(nameA);
  const startsWithNumberB = /^\d/.test(nameB);

  if (startsWithNumberA && !startsWithNumberB) return -1;
  if (!startsWithNumberA && startsWithNumberB) return 1;

  return nameA.localeCompare(nameB);
});

function createClubs() {
  const clubList = document.getElementById("clubList");
  clubList.innerHTML = "";

  clubs.forEach(club => {
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

      
      <div class="club-description">
        ${club.description || "No description available."}
      </div>
    `;

    const star = liElement.querySelector(".favorite-star");

    // check if this club is already favorited (from localStorage)
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorites.some(fav => fav.club === club.club)) {
      star.src = "goldStar.jpeg";
      star.classList.add("favorited");
    }

    star.addEventListener("click", (e) => {
      e.stopPropagation();
      const target = e.target;
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

      target.classList.toggle("favorited");

      if (target.classList.contains("favorited")) {
        target.src = "goldStar.jpeg";
        if (!favorites.some(fav => fav.club === club.club)) {
          favorites.push(club);
        }
      } else {
        target.src = "star.png";
        favorites = favorites.filter(fav => fav.club !== club.club);
      }

      localStorage.setItem("favorites", JSON.stringify(favorites));
    });

    clubList.appendChild(liElement);
  });
}

createClubs();
}





