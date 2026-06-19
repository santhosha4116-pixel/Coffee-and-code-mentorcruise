// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

// TAB SWITCHING

const plansBtn = document.getElementById("plansBtn");
const sessionsBtn = document.getElementById("sessionsBtn");

const plansTab = document.getElementById("plansTab");
const sessionsTab = document.getElementById("sessionsTab");

plansBtn.addEventListener("click", () => {

    plansTab.classList.remove("hidden");
    sessionsTab.classList.add("hidden");

    plansBtn.classList.add(
        "border-b-4",
        "border-[#1f4d3f]",
        "text-[#1f4d3f]"
    );

    sessionsBtn.classList.remove(
        "border-b-4",
        "border-[#1f4d3f]",
        "text-[#1f4d3f]"
    );
});

sessionsBtn.addEventListener("click", () => {

    sessionsTab.classList.remove("hidden");
    plansTab.classList.add("hidden");

    sessionsBtn.classList.add(
        "border-b-4",
        "border-[#1f4d3f]",
        "text-[#1f4d3f]"
    );

    plansBtn.classList.remove(
        "border-b-4",
        "border-[#1f4d3f]",
        "text-[#1f4d3f]"
    );
});

// PLAN SWITCHING

const planButtons = document.querySelectorAll(".plan-btn");

const priceAmount = document.getElementById("priceAmount");
const priceDesc = document.getElementById("priceDesc");
const priceFeatures = document.getElementById("priceFeatures");

planButtons.forEach(button => {

    button.addEventListener("click", () => {

        planButtons.forEach(btn => {
            btn.classList.remove("bg-[#1f4d3f]", "text-white");
        });

        button.classList.add("bg-[#1f4d3f]", "text-white");

        const plan = button.dataset.plan;

        if (plan === "lite") {

            priceAmount.innerHTML = "$149";

            priceDesc.innerHTML =
                "Perfect for AWS beginners starting their cloud journey.";

            priceFeatures.innerHTML = `
                <li>📞 2 Calls Per Month</li>
                <li>💬 Chat Support</li>
                <li>☁️ AWS Basics</li>
                <li>📅 48 Hour Response</li>
            `;
        }

        else if (plan === "standard") {

            priceAmount.innerHTML = "$199";

            priceDesc.innerHTML =
                "Learn AWS fundamentals and cloud computing from scratch.";

            priceFeatures.innerHTML = `
                <li>📞 4 Calls Per Month</li>
                <li>💬 Unlimited Chat Support</li>
                <li>📅 Response Within 24 Hours</li>
                <li>☁️ AWS Hands-On Labs</li>
            `;
        }

        else if (plan === "pro") {

            priceAmount.innerHTML = "$349";

            priceDesc.innerHTML =
                "Advanced AWS mentorship with certification guidance.";

            priceFeatures.innerHTML = `
                <li>📞 8 Calls Per Month</li>
                <li>💬 Priority Support</li>
                <li>☁️ Real AWS Projects</li>
                <li>🎯 Certification Preparation</li>
            `;
        }
    });

});