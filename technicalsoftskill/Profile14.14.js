// MOBILE MENU

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

if (hamburger) {
    hamburger.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });
}

// TAB SWITCHING

const tabButtons = document.querySelectorAll(".pricing__tab");
const plansTab = document.getElementById("plansTab");
const sessionsTab = document.getElementById("sessionsTab");

tabButtons.forEach(button => {

    button.addEventListener("click", () => {

        const tab = button.dataset.tab;

        tabButtons.forEach(btn => {
            btn.classList.remove("pricing__tab--active");
        });

        button.classList.add("pricing__tab--active");

        if (tab === "plans") {
            plansTab.classList.remove("pricing__body--hidden");
            sessionsTab.classList.add("pricing__body--hidden");
        }

        if (tab === "sessions") {
            sessionsTab.classList.remove("pricing__body--hidden");
            plansTab.classList.add("pricing__body--hidden");
        }

    });

});

// PLAN SWITCHING

const planButtons = document.querySelectorAll(".plan-btn");
const priceAmount = document.getElementById("priceAmount");
const priceDesc = document.getElementById("priceDesc");
const priceFeatures = document.getElementById("priceFeatures");

planButtons.forEach(button => {

    button.addEventListener("click", () => {

        planButtons.forEach(btn => {
            btn.classList.remove("plan-btn--active");
        });

        button.classList.add("plan-btn--active");

        const plan = button.dataset.plan;

        if (plan === "lite") {

            priceAmount.innerHTML = "$149";

            priceDesc.innerHTML =
            "Perfect for beginners starting their learning journey.";

            priceFeatures.innerHTML = `
                <li>📞 2 Calls Per Month</li>
                <li>💬 Chat Support</li>
                <li>📅 48 Hour Response</li>
            `;
        }

        if (plan === "standard") {

            priceAmount.innerHTML = "$199";

            priceDesc.innerHTML =
            "Most popular mentorship plan.";

            priceFeatures.innerHTML = `
                <li>📞 4 Calls Per Month</li>
                <li>💬 Unlimited Chat Support</li>
                <li>📅 24 Hour Response</li>
                <li>🎯 Project Guidance</li>
            `;
        }

        if (plan === "pro") {

            priceAmount.innerHTML = "$349";

            priceDesc.innerHTML =
            "Advanced mentorship with priority support.";

            priceFeatures.innerHTML = `
                <li>📞 8 Calls Per Month</li>
                <li>💬 Priority Support</li>
                <li>🎯 Career Guidance</li>
                <li>🚀 Real Projects</li>
            `;
        }

    });

});