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
function filterOverlay() {
    const overlay = document.getElementById('filterOverlay');
    if (overlay.style.display === 'flex') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'flex';
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

function displayNotifications(){
    if (document.getElementById('notificationsList').style.display === 'grid'){
        document.getElementById('headBody').scrollIntoView({ behavior: 'smooth' });
        document.getElementById('notificationsList').style.display = 'none';
    } else {
        document.getElementById('notificationsList').style.display = 'grid';
        document.getElementById('clubNotifications').scrollIntoView({ behavior: 'smooth' });
    }

    
}

function submitNotification(){
    const clubName = document.getElementById('notificationClubName').value;
    const staffName = document.getElementById('notificationStaffName').value;
    const description = document.getElementById('notificationDescription').value;

    if (clubName && staffName && description) {
        const notificationList = document.getElementById('notificationsList');

        const newNotification = document.createElement('div');
        newNotification.className = 'notificationItem';
        newNotification.innerHTML = `
            <li>
                <h3>${clubName}</h3>
                <h4>${staffName}</h4>
                <p>${description}</p>
            </li>
        `;

        notificationList.appendChild(newNotification);

        // Clear input fields
        document.getElementById('notificationClubName').value = '';
        document.getElementById('notificationStaffName').value = '';
        document.getElementById('notificationDescription').value = '';

        alert('Notification submitted successfully!');
    } else {
        alert('Please fill in all fields before submitting.');
    }
}
