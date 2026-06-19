// ===========================
// MOBILE MENU TOGGLE
// ===========================
var hamburger = document.getElementById("hamburger");
var mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("open");
});


// ===========================
// PRICE PLAN SWITCHING
// ===========================
// Grab all 3 plan buttons (Lite, Standard, Pro)
var planButtons = document.querySelectorAll(".plan-btn");

// Grab the elements we need to update when plan changes
var priceAmount = document.getElementById("priceAmount");
var priceDesc = document.getElementById("priceDesc");
var priceFeatures = document.getElementById("priceFeatures");

// Run this function every time a plan button is clicked
function handlePlanClick(event) {

    // Find out WHICH button was clicked using data-plan attribute
    var clickedPlan = event.target.getAttribute("data-plan");

    // First remove "active" look from all buttons
    for (var i = 0; i < planButtons.length; i++) {
        planButtons[i].classList.remove("plan-btn--active");
    }

    // Then add "active" look to the one that was clicked
    event.target.classList.add("plan-btn--active");

    // Now change the price, description and features based on which plan
    if (clickedPlan == "lite") {
        priceAmount.innerHTML = "$200";
        priceDesc.innerHTML = "Let me guide you on your journey into video game development and real time systems!";
        priceFeatures.innerHTML =
            "<li>📞 2 calls per month (60min/call)</li>" +
            "<li>💬 Unlimited Q&A via chat</li>" +
            "<li>📅 Expect responses in 2 days</li>";
    }
    else if (clickedPlan == "standard") {
        priceAmount.innerHTML = "$350";
        priceDesc.innerHTML = "Let me guide you on your journey into video game development and real time systems!";
        priceFeatures.innerHTML =
            "<li>📞 4 calls per month (60min/call)</li>" +
            "<li>💬 Unlimited Q&A via chat</li>" +
            "<li>📅 Expect responses in 24 hours or less</li>" +
            "<li>🎒 Hands-on support</li>";
    }
    else if (clickedPlan == "pro") {
        priceAmount.innerHTML = "$1000";
        priceDesc.innerHTML = "Treat me as your tech architect / team lead. For teams/individuals needing frequent expert guidance.";
        priceFeatures.innerHTML =
            "<li>📞 6 calls per month (60min/call)</li>" +
            "<li>💬 Unlimited Q&A via chat</li>" +
            "<li>📅 Expect responses in 24 hours or less</li>" +
            "<li>🎒 Hands-on support</li>";
    }
}

// Attach the click event to every plan button
for (var i = 0; i < planButtons.length; i++) {
    planButtons[i].addEventListener("click", handlePlanClick);
}


// ===========================
// TAB SWITCHING (Mentorship plans / Sessions)
// ===========================
var tabButtons = document.querySelectorAll(".pricing__tab");
var plansTab = document.getElementById("plansTab");
var sessionsTab = document.getElementById("sessionsTab");

function handleTabClick(event) {

    // Find out which tab was clicked: "plans" or "sessions"
    var clickedTab = event.target.getAttribute("data-tab");

    // Remove active style from all tab buttons first
    for (var k = 0; k < tabButtons.length; k++) {
        tabButtons[k].classList.remove("pricing__tab--active");
    }

    // Add active style to the one just clicked
    event.target.classList.add("pricing__tab--active");

    // Now show/hide the correct panel
    if (clickedTab == "plans") {
        plansTab.classList.remove("pricing__body--hidden");
        sessionsTab.classList.add("pricing__body--hidden");
    }
    else if (clickedTab == "sessions") {
        sessionsTab.classList.remove("pricing__body--hidden");
        plansTab.classList.add("pricing__body--hidden");
    }
}

for (var j = 0; j < tabButtons.length; j++) {
    tabButtons[j].addEventListener("click", handleTabClick);
}