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