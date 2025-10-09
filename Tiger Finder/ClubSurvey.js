function checkClickedQ1() {
    const activity = document.getElementById("activity");
    const academic = document.getElementById("academic");
    const volunteer = document.getElementById("volunteer");

    const subQuestions = document.getElementsByClassName("subQuestion1");

    if (activity.checked) {
        // Loop through the collection of elements and set display to "block" for each
        for (let i = 0; i < subQuestions.length; i++) {
            subQuestions[i].style.display = "block";
        }
    } else {
        // Optional: Hide the subquestions if "activity" is unchecked
        for (let i = 0; i < subQuestions.length; i++) {
            subQuestions[i].style.display = "none";
        }
    }
}

/*
checkClickedQ2(){

}

checkClickedQ3(){

}
*/