// -------- MENU HTML (INJECTED INTO PAGE) --------

const menuHTML = `
<!-- Hamburger button -->
<button id="menuToggle" class="menu-btn">☰</button>

<!-- Sidebar -->
<nav id="sideMenu" class="side-menu">
    <ul>
        <li><a href="/martial-line/index.html">Martial Line Constellation</a></li>
        <li><a href="/martial-line/about.html">About</a></li>

        <!-- DROPDOWN -->
        <li class="dropdown">
            <button class="dropdown-btn">Articles ▼</button>
            <ul class="dropdown-content">
                <li><a href="/martial-line/articles/fighting_violence.html">Fighting Violence</a></li>
                <li><a href="/martial-line/articles/martial_practice_paradox.html">The Paradox of Martial Practice</a></li>
                <li><a href="/martial-line/articles/slow_motion.html">The Slow-Motion Principle</a></li>
                <li><a href="/martial-line/articles/cold_weapon_defence.html">Cold Weapon Defence</a></li>
                <li><a href="/martial-line/articles/battle_stance.html">Battle Compositions</a></li>
            </ul>
        </li>
    </ul>
</nav>

<!-- Overlay -->
<div id="overlay" class="overlay"></div>
`;


// -------- INJECT MENU INTO PAGE --------

document.getElementById("menu-container").innerHTML = menuHTML;


// -------- MENU BEHAVIOR --------

// Sidebar toggle
const menu = document.getElementById("sideMenu");
const toggleBtn = document.getElementById("menuToggle");
const overlay = document.getElementById("overlay");

toggleBtn.onclick = () => {
    menu.classList.toggle("open");
    overlay.classList.toggle("show");
};

overlay.onclick = () => {
    menu.classList.remove("open");
    overlay.classList.remove("show");
};

// Dropdown toggle
const dropdown = document.querySelector(".dropdown");
const dropdownBtn = dropdown.querySelector(".dropdown-btn");

dropdownBtn.addEventListener("click", () => {
    dropdown.classList.toggle("open");
});
