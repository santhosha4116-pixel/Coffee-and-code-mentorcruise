
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    if (mobileMenu.classList.contains("hidden")) {
        menuBtn.innerHTML = "☰";
    } else {
        menuBtn.innerHTML = "✕";
    }
});


const search = document.getElementById("search");
const mentorCards = document.querySelectorAll(".mentor-card");

const courseFilters = document.querySelectorAll(".course-filter input");
const levelFilters = document.querySelectorAll(".level-filter input");
const languageFilters = document.querySelectorAll(".language-filter input");

search.addEventListener("keyup", filterMentors);

document.querySelectorAll("input[type='checkbox']")
.forEach(box => {
    box.addEventListener("change", filterMentors);
});

function filterMentors() {

    const searchText = search.value.toLowerCase();

    let selectedCourses = [];
    let selectedLevels = [];
    let selectedLanguages = [];

    courseFilters.forEach(box => {
        if (box.checked) {
            selectedCourses.push(box.value);
        }
    });

    levelFilters.forEach(box => {
        if (box.checked) {
            selectedLevels.push(box.value);
        }
    });

    languageFilters.forEach(box => {
        if (box.checked) {
            selectedLanguages.push(box.value);
        }
    });

    mentorCards.forEach(card => {

        const mentorName = card.querySelector("h2")
            .textContent.toLowerCase();

        const course = card.dataset.course || "";
        const level = card.dataset.level || "";
        const language = card.dataset.language || "";

        const searchMatch =
            mentorName.includes(searchText);

        const courseMatch =
            selectedCourses.length === 0 ||
            selectedCourses.includes(course);

        const levelMatch =
            selectedLevels.length === 0 ||
            selectedLevels.includes(level);

        const languageMatch =
            selectedLanguages.length === 0 ||
            selectedLanguages.some(lang =>
                language.toLowerCase().includes(lang.toLowerCase())
            );

        if (
            searchMatch &&
            courseMatch &&
            levelMatch &&
            languageMatch
        ) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

