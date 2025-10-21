//dropdown menu function
function dropDown() {
    const nav = document.querySelector('nav');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }

    const main = document.querySelector(".blur");
    main.classList.toggle('blurred');
}
function filterOverlay() {
    const overlay = document.getElementById('filterOverlay');
    if (overlay.style.display === 'block') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'block';
    }

    const main = document.querySelector(".blur");
    main.classList.toggle('blurred');
}
function loginLogout(){
    
}
// Save and load checkbox states using localStorage
  function saveCheckboxStates() {
      document.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
          checkbox.addEventListener('change', () => {
              localStorage.setItem(checkbox.id, checkbox.checked);
          });
      });
  }

  function loadCheckboxStates() {
      document.querySelectorAll('input[type=checkbox]').forEach(checkbox => {
          const saved = localStorage.getItem(checkbox.id);
          if (saved !== null) checkbox.checked = saved === 'true';
      });
  }

  document.addEventListener('DOMContentLoaded', () => {
      loadCheckboxStates();
      saveCheckboxStates();
  });

// Search bar 
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');

    // Load saved search term
    const savedSearch = localStorage.getItem('searchTerm');
    if (savedSearch) {
        searchBar.value = savedSearch;
    }

    // Save new search term on input
    searchBar.addEventListener('input', () => {
        localStorage.setItem('searchTerm', searchBar.value);
    });

    // Redirect to club page when enter is pressed
    searchBar.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            window.location.href = "Clubs.html";
        }
    });
});