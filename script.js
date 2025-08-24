// ========= super-duper script.js =========

// function to greet user based on time
function showGreeting() {
    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();
    let message = "";

    if (hour < 12) {
        message = "☀️ Good Morning!";
    } else if (hour < 18) {
        message = "🌤️ Good Afternoon!";
    } else {
        message = "🌙 Good Evening!";
    }

    greeting.textContent = message;

    // Add a fade animation each time it updates
    greeting.classList.remove("fade-in");
    void greeting.offsetWidth; // restart animation trick
    greeting.classList.add("fade-in");
}

// function to change background colors randomly
function changeBackground() {
    const colors = [
        ["#6a11cb", "#2575fc"],
        ["#ff512f", "#dd2476"],
        ["#36d1dc", "#5b86e5"],
        ["#11998e", "#38ef7d"],
        ["#fc6076", "#ff9a44"]
    ];

    // pick random gradient
    const choice = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.background = `linear-gradient(-45deg, ${choice[0]}, ${choice[1]})`;
    document.body.style.backgroundSize = "400% 400%";
}

// Run greeting on load
window.onload = () => {
    showGreeting();

    // also refresh greeting every 30 minutes
    setInterval(showGreeting, 30 * 60 * 1000);
};
