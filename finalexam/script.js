document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const loginButton = document.getElementById("loginButton");
    const registerButton = document.getElementById("registerButton");
    const loginForm = document.getElementById("loginForm");

    registerButton.addEventListener('click', () => {
        container.classList.add('right-panel-active');
    });
    
    loginButton.addEventListener('click', () => {
        container.classList.remove('right-panel-active');
    });

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form submission
        window.location.href = "Inventory.html"; // Redirect to Inventory.html
    });
});
