function createClubs() {
  const clubList = document.getElementById("clubList");

  const clubs = [
  { "staff": "Knapp, Erin", "club": "2000s Fun!", "email": "eknapp@hse.k12.in.us" },
  { "staff": "French, Brigham", "club": "AI Club", "email": "bfrench@hse.k12.in.us" },
  { "staff": "Shuck, Jamison", "club": "African Association Culture Club", "email": "jshuck@hse.k12.in.us" },
  { "staff": "Barfield, Alexis", "club": "Alaska Native and Native American Club", "email": "abarfield@hse.k12.in.us" },
  { "staff": "Farrand, Angela", "club": "American Sign Language (ASL) Club", "email": "afarrand@hse.k12.in.us" },
  { "staff": "Jacobs, Kelli", "club": "Anime Club", "email": "kjacobs@hse.k12.in.us" },
  { "staff": "Seland, Glenn", "club": "Animation Club", "email": "gseland@hse.k12.in.us" },
  { "staff": "Spencer, Tammie", "club": "Animal Alliance", "email": "tspencer@hse.k12.in.us" },
  { "staff": "Brown, Lisa", "club": "Art Club", "email": "lgbrown@hse.k12.in.us" },
  { "staff": "Black, Scott", "club": "Asian Student Union", "email": "sdblack@hse.k12.in.us" },
  { "staff": "Meador, Taylor", "club": "Aura8 Dance Club", "email": "tmeador@hse.k12.in.us" },
  { "staff": "Harris, Ryan & Madelein, Luna", "club": "Badminton Cub", "email": "rharris@hse.k12.in.us & mluna@hse.k12.in.us" },
  { "staff": "Delucenay, Katie", "club": "Baking Club", "email": "kdelucenay@hse.k12.in.us" },
  { "staff": "Schuh, Tori", "club": "Best Buddies", "email": "vschuh@hse.k12.in.us" },
  { "staff": "Lidy, Shelley", "club": "Better Help Club", "email": "slidy@hse.k12.in.us" },
  { "staff": "Kapitan, Jacob", "club": "Bible Study Group", "email": "jkapitan@hse.k12.in.us" },
  { "staff": "Gastineau, Chelley", "club": "Bring Change to Mind", "email": "cgastineau@hse.k12.in.us" },
  { "staff": "Tysen, Jessica", "club": "Bowling Club", "email": "jessicanstevens@gmail.com" },
  { "staff": "Carson, Beth", "club": "Care Crafts Project", "email": "acarson@hse.k12.in.us" },
  { "staff": "McCabe, Shanna", "club": "CATS (Creating Action Through Service)", "email": "smccabe@hse.k12.in.us" },
  { "staff": "Schooley, Patrick", "club": "Champions Together", "email": "pschooley@hse.k12.in.us" },
  { "staff": "Kuhn, Lance", "club": "Chemistry Club", "email": "lkuhn@hse.k12.in.us" },
  { "staff": "French, Brigham", "club": "Chess Club", "email": "bfrench@hse.k12.in.us" },
  { "staff": "Snyder, Tammy", "club": "CRU (Student Venture)", "email": "tsnyder@hse.k12.in.us" },
  { "staff": "Harris, Ryan", "club": "Cricket Club", "email": "rharris@hse.k12.in.us" },
  { "staff": "Manoharan, Vennila", "club": "Crochet Club", "email": "vmanoharan@hse.k12.in.us" },
  { "staff": "Isom, Renee", "club": "Cultural Connections Club", "email": "risom@hse.k12.in.us" },
  { "staff": "Huppenthal, Suzie", "club": "Do Something Club", "email": "shuppenthal@hse.k12.in.us" },
  { "staff": "Chan, Brooke", "club": "Disney Lorcana TCG Club", "email": "bchan@hse.k12.in.us" },
  { "staff": "Rund, Emma", "club": "Drama Club / Theatre Fishers", "email": "erund@hse.k12.in.us" },
  { "staff": "Curtis, Steven & Kapitan, Jacob", "club": "Dungeons & Dragons Club", "email": "scurtis@hse.k12.in.us & jkapitan@hse.k12.in.us " },
  { "staff": "Thomas, William", "club": "East African Student Association", "email": "wthomas@hse.k12.in.us" },
  { "staff": "Kapitan, Jacob", "club": "E-Sports Club", "email": "jkapitan@hse.k12.in.us" },
  { "staff": "Turner, Dave", "club": "Economics Club", "email": "dturner@hse.k12.in.us" },
  { "staff": "Meador, Taylor", "club": "ENL Club", "email": "tmeador@hse.k12.in.us" },
  { "staff": "Vaughn, Alisa", "club": "ENL Math Tutoring", "email": "avaughn@hse.k12.in.us" },
  { "staff": "Thompson-Mejias, Terri", "club": "Euchre Club", "email": "tthompsonmejias@hse.k12.in.us" },
  { "staff": "Votaw, Lauren", "club": "Fellowship of Christian Athletes (FCA)", "email": "lvotaw@hse.k12.in.us" },
  { "staff": "Seland, Glenn", "club": "Film Club", "email": "gseland@hse.k12.in.us" },
  { "staff": "Isom, Renee & McCabe, Shanna", "club": "FHS Reads Book Club", "email": "risom@hse.k12.in.us & smccabe@hse.k12.in.us" },
  { "staff": "Macmillan, Jordan", "club": "FHS \"Pubs\" Club (Publications)", "email": "jmacmillan@hse.k12.in,us" },
  { "staff": "Chop, Dahnya", "club": "French Club", "email": "dchop@hse.k12.in.us" },
  { "staff": "Lawrence, Samuel", "club": "Future Farmers of America (FFA)", "email": "slawrence@hse.k12.in.us" },
  { "staff": "Isom, Renee", "club": "Future Black Leaders", "email": "risom@hse.k12.in.us" },
  { "staff": "Gutting, Stephanie", "club": "Harry Potter Club", "email": "sgutting@hse.k12.in.us" },
  { "staff": "Placzek, Sharon", "club": "Hispanic Heritage Club", "email": "splaczek@hse.k12.in.us" },
  { "staff": "Steange, Susanne", "club": "Gymnastics", "email": "strangesusie@gmail.com" },
  { "staff": "Curtis, Liz", "club": "GSA", "email": "lcurtis@hse.k12.in.us" },
  { "staff": "Shafer, Gretchen", "club": "Gratitude Bowls", "email": "gshafer@hse.k12.in.us" },
  { "staff": "Ondish, Kelsey", "club": "Improv Club", "email": "kondish@hse.k12.in.us" },
  { "staff": "Werbe, Jim", "club": "Intramural Basketball", "email": "jwerbe@hse.k12.in.us" },
  { "staff": "Turner, Dave", "club": "Investment Club", "email": "dturner@hse.k12.in.us" },
  { "staff": "White, Jessica", "club": "Key Club", "email": "jlwhite@hse.k12.in.us" },
  { "staff": "Thompson-Mejias, Terri", "club": "Latino Student Union", "email": "tthompsonmejias@hse.k12.in.us" },
  { "staff": "Ondish, Kelsey", "club": "LLS Club (Leukemia & Lymphoma Society", "email": "kondish@hse.k12.in.us" },
  { "staff": "Meador, Taylor", "club": "K-Pop Club", "email": "tmeador@hse.k12.in.us" },
  { "staff": "Chan, Brooke", "club": "Magic: The Gathering", "email": "bchan@hse.k12.in.us" },
  { "staff": "Young, Kate", "club": "Million Meal Movement", "email": "kyoung@hse.k12.in.us" },
  { "staff": "Masterson, Ray", "club": "Music & Sound Recording Club", "email": "rmasterson@hse.k12.in.us" },
  { "staff": "Bockenfeld, Matt", "club": "Muslim Student Association (MSA)", "email": "mbockenfeld@hse.k12.in.us" },
  { "staff": "Armey, Julie & Lyons, Suzanne", "club": "Orchestra Club", "email": "jarmey@hse.k12.in.us & slyons@hse.k12.in.us" },
  { "staff": "Schulhof, Beth", "club": "Pickleball Club", "email": "eschulhof@hse.k12.in.us" },
  { "staff": "Kapitan, Jacob", "club": "Pokemon Club", "email": "jkapitan@hse.k12.in.us" },
  { "staff": "Buckman, Bill", "club": "Poker Club", "email": "mbuckman@hse.k12.in.us" },
  { "staff": "Jordan, Monica", "club": "Rock Climbing Club", "email": "mrjordan@hse.k12.in.us" },
  { "staff": "Czech, Mike", "club": "School of Rock", "email": "mczech@hse.k12.in.us" },
  { "staff": "Noyes, Summer & Ferguson, Heather", "club": "Senior Smile Society", "email": "snoyes@hse.k12.in.us & hferguson@hse.k12.in.us" },
  { "staff": "Helmkamp, Michelle & Gutting, Stephanie", "club": "Spanish Club", "email": "mhelmkamp@hse.k12.in.us & sgutting@hse.k12.in.us" },
  { "staff": "Smith, Andy", "club": "Tech Crew / Theatre Fishers", "email": "asmith@hse.k12.in.us" },
  { "staff": "Swaim, Matt", "club": "Tiger Ambassadors", "email": "mswaim@hse.k12.in.us" },
  { "staff": "Tribolet, Braden", "club": "Tiger Spirit Leaders", "email": "btribolet@hse.k12.in.us" },
  { "staff": "Hamilton, Terri", "club": "Student Organ Donor Advocates (SODA)", "email": "thamilton@hse.k12.in.us" },
  { "staff": "Kixmiller, Lori", "club": "Student Government (Sponsor)", "email": "lkixmiller@hse.k12.in.us" },
  { "staff": "Greisinger, Jessica & Geisinger, Robin", "club": "Swiss-Mix Club (formerly German Club)", "email": "jgeisinger@hse.k12.in.us & rgeisinger@hse.k12.in.us" },
  { "staff": "Paternoster, Liz", "club": "We The People (Head Coach)", "email": "lpaternoster@hse.k12.in.us" },
  { "staff": "VanTrees, Leah", "club": "W.R.I.T.E. Club", "email": "lvantrees@hse.k12.in.us" },
  { "staff": "Horn, Sara", "club": "Women in S.T.E.M.", "email": "shorn@hse.k12.in.us" },
  { "staff": "Knapp, Erin", "club": "Yoga Club", "email": "eknapp@hse.k12.in.us" },
  { "staff": "Goodwin, Danielle & Gutting, Stephanie", "club": "Unified Dance", "email": "dgoodwin@hse.k12.in.us & sgutting@hse.k12.in.us" },
];


  clubs.forEach(club => {
    const liElement = document.createElement("li");
    liElement.innerHTML = `
     <button class="favorite-btn">⭐</button>
      <h3 class="clubBoxesFontSize">${club.club}</h3>
      <p class="clubBoxesFontSize">${club.staff}</p>
      <p class = "clubBoxesEmailSize">${club.email}
    `;
    liElement.querySelector(".favorite-btn").addEventListener("click", (e) => {
  e.target.classList.toggle("favorited");
  // If it's favorited, save to localStorage
  if (e.target.classList.contains("favorited")) {
    // Get existing favorites or start fresh
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    e.target.textContent = "🌟";

    // Add this club if not already in favorites
    if (!favorites.some(fav => fav.club === club.club)) {
      favorites.push(club);
    }
    
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } else {
    // If unfavorited, remove from localStorage
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter(fav => fav.club !== club.club);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    e.target.textContent = "⭐";
  }
});
    clubList.appendChild(liElement);
  });
}

createClubs();




