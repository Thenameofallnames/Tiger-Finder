const auth = firebase.auth();
const db = firebase.firestore();

//dropdown menu function
function dropDown() {
    const main = document.querySelector(".blur");
    const container = document.querySelector(".dropDownMenu");
    const button = document.getElementById('dropDownButton');

    if (container.style.opacity === '1') {
        container.style.opacity = '0';
        container.style.pointerEvents = 'none';
        button.style.color = '';
        button.style.borderColor = '';
        button.innerHTML = '<img src="dropdownMain.png" id="dropDownImage"> Menu';
        main.style.filter = 'none';
    } else {
        container.style.opacity = '1';
        container.style.pointerEvents = 'auto';
        button.style.color = '#db0032';
        button.style.borderColor = '#db0032';
        button.innerHTML = '<img src="images/menuClose.png" id="dropDownImage"> Close';
        main.style.filter = 'blur(5px)';
    }
}
function filterOverlay() {
    const overlay = document.getElementById('filterOverlay');
    overlay.classList.toggle('show');

    const main = document.querySelector(".blur");
    main.classList.toggle('blurred');
}

function switchPageCreate() {
    const sign = document.getElementById('signInBox');
    const create = document.getElementById('createAccountBox');
    const staff = document.getElementById('staffBox');

    sign.style.opacity = '0';
    sign.style.pointerEvents = 'none';

    staff.style.opacity = '0';
    staff.style.pointerEvents = 'none';

    create.style.opacity = '1';
    create.style.pointerEvents = 'auto';
}

function switchPageSign() {
    const sign = document.getElementById('signInBox');
    const create = document.getElementById('createAccountBox');

    create.style.opacity = '0';
    create.style.pointerEvents = 'none';

    sign.style.opacity = '1';
    sign.style.pointerEvents = 'auto';
}

function switchPageOwner() {
    const create = document.getElementById('createAccountBox');
    const staff = document.getElementById('staffBox');
    create.style.opacity = '0';
    create.style.pointerEvents = 'none';

    staff.style.opacity = '1';
    staff.style.pointerEvents = 'auto';
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

function displayNotifications() {
    if (document.getElementById('notificationsList').style.display === 'grid') {
        document.getElementById('headBody').scrollIntoView({ behavior: 'smooth' });
        document.getElementById('notificationsList').style.display = 'none';
    } else {
        document.getElementById('notificationsList').style.display = 'grid';
        document.getElementById('clubNotifications').scrollIntoView({ behavior: 'smooth' });
    }


}

//notification submission function
function submitNotification() {
    const clubNameVal = document.getElementById('notificationClubName').value;
    const staffNameVal = document.getElementById('notificationStaffName').value;
    const descriptionVal = document.getElementById('notificationDescription').value;
    if (clubNameVal && staffNameVal && descriptionVal) {
        // ---- SAVE TO FIREBASE ----
        db.collection("notifications").add({
            clubName: clubNameVal,
            staffName: staffNameVal,
            description: descriptionVal,
            timestamp: new Date()
        })
            .then(() => {

                const notificationList = document.getElementById('notificationsList');

                const newNotification = document.createElement('div');
                newNotification.className = 'notificationItem';
                newNotification.innerHTML = `
            <li>
                <h3>${clubNameVal}</h3>
                <h4>${staffNameVal}</h4>
                <p>${descriptionVal}</p>
            </li>
        `;

                notificationList.appendChild(newNotification);

                // Clear input fields
                document.getElementById('notificationClubName').value = '';
                document.getElementById('notificationStaffName').value = '';
                document.getElementById('notificationDescription').value = '';

                alert('Notification submitted successfully!');
            }).catch((error) => {
                console.error("Error adding notification: ", error);
                alert('Failed to submit notification. Please try again.' + error);
            });
    } else {
        alert('Please fill in all fields before submitting the notification.');
    }
}

document.addEventListener('DOMContentLoaded', function () {

    const clubName = document.getElementById('notificationClubName');
    const staffName = document.getElementById('notificationStaffName');
    const description = document.getElementById('notificationDescription');

    // Check to ensure the elements were actually found
    if (clubName && staffName && description) {
        clubName.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                submitNotification();
                console.log("Enter pressed on Club Name");
            }
        });

        staffName.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                submitNotification();
                console.log("Enter pressed on Staff Name");
            }
        });

        description.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                submitNotification();
                console.log("Enter pressed on Description");
            }
        });
    } else {
        console.error("One or more notification input elements were not found.");
    }

    // Your submitNotification function definition should also be accessible here
    // or defined globally above this section.
});