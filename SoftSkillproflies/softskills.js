// ===========================
// HAMBURGER MENU
// ===========================
var menuBtn = document.getElementById("menuBtn");
var mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");

    if (mobileMenu.classList.contains("open")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }
});


// ===========================
// FILTER + SEARCH
// ===========================
var searchInput = document.getElementById("search");
var mentorCards = document.querySelectorAll(".mentor-card");

var courseFilters = document.querySelectorAll(".course-filter input");
var levelFilters = document.querySelectorAll(".level-filter input");
var languageFilters = document.querySelectorAll(".language-filter input");

// Run filter when user types in search box
searchInput.addEventListener("keyup", filterMentors);

// Run filter when any checkbox is clicked
var allCheckboxes = document.querySelectorAll("input[type='checkbox']");
for (var i = 0; i < allCheckboxes.length; i++) {
    allCheckboxes[i].addEventListener("change", filterMentors);
}

function filterMentors() {

    // Get the current search text (lowercase for easy comparison)
    var searchText = searchInput.value.toLowerCase();

    // Collect all checked course values
    var selectedCourses = [];
    for (var i = 0; i < courseFilters.length; i++) {
        if (courseFilters[i].checked) {
            selectedCourses.push(courseFilters[i].value);
        }
    }

    // Collect all checked level values
    var selectedLevels = [];
    for (var i = 0; i < levelFilters.length; i++) {
        if (levelFilters[i].checked) {
            selectedLevels.push(levelFilters[i].value);
        }
    }

    // Collect all checked language values
    var selectedLanguages = [];
    for (var i = 0; i < languageFilters.length; i++) {
        if (languageFilters[i].checked) {
            selectedLanguages.push(languageFilters[i].value);
        }
    }

    // Loop through every mentor card and decide show or hide
    for (var i = 0; i < mentorCards.length; i++) {

        var card = mentorCards[i];

        // Get the mentor name from the h2 inside the card
        var mentorName = card.querySelector("h2").textContent.toLowerCase();

        // Get the data attributes from the card
        var cardCourse = card.getAttribute("data-course") || "";
        var cardLevel = card.getAttribute("data-level") || "";
        var cardLanguage = card.getAttribute("data-language") || "";

        // Check if search text matches mentor name
        var searchMatch = mentorName.includes(searchText);

        // Check if course matches (if no course selected, show all)
        var courseMatch = true;
        if (selectedCourses.length > 0) {
            courseMatch = false;
            for (var j = 0; j < selectedCourses.length; j++) {
                if (cardCourse == selectedCourses[j]) {
                    courseMatch = true;
                }
            }
        }

        // Check if level matches (if no level selected, show all)
        var levelMatch = true;
        if (selectedLevels.length > 0) {
            levelMatch = false;
            for (var j = 0; j < selectedLevels.length; j++) {
                if (cardLevel.includes(selectedLevels[j])) {
                    levelMatch = true;
                }
            }
        }

        // Check if language matches (if no language selected, show all)
        var languageMatch = true;
        if (selectedLanguages.length > 0) {
            languageMatch = false;
            for (var j = 0; j < selectedLanguages.length; j++) {
                if (cardLanguage.toLowerCase().includes(selectedLanguages[j].toLowerCase())) {
                    languageMatch = true;
                }
            }
        }

        // Show the card only if ALL conditions pass
        if (searchMatch && courseMatch && levelMatch && languageMatch) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    }
}