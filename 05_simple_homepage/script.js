const nav_switch = document.querySelectorAll(".nav-switch");
const mobile_navbar = document.querySelector(".mobile-nav-bar");
const menu_icon = document.querySelectorAll(".menu-icon i");

nav_switch.forEach((item) =>
  item.addEventListener("click", () => {
    const switch_toggle = document.querySelectorAll(".nav-switch-toggle");
    const company_logo = document.querySelector(".company-logo");

    switch_toggle.forEach((item) => {
      if (item.classList.contains("toggled")) {
        item.classList.remove("toggled");
        document.body.classList.add("dark-theme");
        company_logo.src = "images/alarado-icon-homepage-dark.svg";
      } else {
        item.classList.add("toggled");
        document.body.classList.remove("dark-theme");
        company_logo.src = "images/alarado-icon-homepage.svg";
      }
    });
  })
);

menu_icon.forEach((item) =>
  item.addEventListener("click", () => {
    if (item.classList.contains("fa-bars")) {
      mobile_navbar.style.display = "flex";
    } else {
      mobile_navbar.style.display = "none";
    }
  })
);
