const openBtn = document.getElementById("menu-open");
const closeBtn = document.getElementById("menu-close");
const navMenu = document.querySelector(".nav-bar ul");

openBtn.addEventListener("click", () => {
    navMenu.classList.add("active");
    openBtn.style.display = "none";
    closeBtn.style.display = "block";
    closeBtn.style.position = "fixed";
    closeBtn.style.top = "15px";
    closeBtn.style.right = "15px";
});

closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("active");
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
});