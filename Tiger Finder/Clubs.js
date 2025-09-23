function createClubs(clubnumber) {
      const clubList = document.getElementById("clubList");
      for (let i = 1; i <= clubnumber; i++) {
        const liElement = document.createElement("li");
        liElement.textContent = "Club " + i; // label each box
        clubList.appendChild(liElement);
      }
    }

