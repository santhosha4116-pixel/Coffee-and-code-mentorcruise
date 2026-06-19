// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    menuBtn.textContent =
        mobileMenu.classList.contains("hidden")
            ? "☰"
            : "✕";
});


// PLAN DATA

const plans = {
    lite: {
        price: "$149",
        desc: "Perfect for beginners starting Full Stack Development.",
        features: [
            "📞 2 Calls Per Month",
            "💬 Chat Support",
            "📅 Response Within 48 Hours",
            "📚 Learning Roadmap"
        ]
    },

    standard: {
        price: "$199",
        desc: "Learn Full Stack Development from scratch. Build real-world projects and become job ready.",
        features: [
            "📞 4 Calls Per Month",
            "💬 Unlimited Chat Support",
            "📅 Response Within 24 Hours",
            "🎯 Project Guidance"
        ]
    },

    pro: {
        price: "$399",
        desc: "Advanced mentoring with interview prep and career guidance.",
        features: [
            "📞 8 Calls Per Month",
            "💬 Priority Support",
            "📅 Same Day Response",
            "🎯 Advanced Projects",
            "💼 Interview Preparation"
        ]
    }
};


// PLAN SWITCHING

const planButtons = document.querySelectorAll(".plan-btn");

const priceAmount = document.getElementById("priceAmount");
const priceDesc = document.getElementById("priceDesc");
const priceFeatures = document.getElementById("priceFeatures");

function updatePlan(planName) {

    const plan = plans[planName];

    priceAmount.textContent = plan.price;
    priceDesc.textContent = plan.desc;

    priceFeatures.innerHTML = "";

    plan.features.forEach(feature => {
        const li = document.createElement("li");
        li.textContent = feature;
        priceFeatures.appendChild(li);
    });

    planButtons.forEach(btn => {
        btn.classList.remove("bg-[#2d6b58]", "text-white");
    });

    document
        .querySelector(`[data-plan="${planName}"]`)
        .classList.add("bg-[#2d6b58]", "text-white");
}

planButtons.forEach(button => {

    button.addEventListener("click", () => {

        updatePlan(button.dataset.plan);

    });

});

updatePlan("standard");


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
        "border-[#2d6b58]"
    );

    sessionsBtn.classList.remove(
        "border-b-4",
        "border-[#2d6b58]"
    );

});

sessionsBtn.addEventListener("click", () => {

    sessionsTab.classList.remove("hidden");
    plansTab.classList.add("hidden");

    sessionsBtn.classList.add(
        "border-b-4",
        "border-[#2d6b58]"
    );

    plansBtn.classList.remove(
        "border-b-4",
        "border-[#2d6b58]"
    );

});