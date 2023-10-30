const navLinks = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll("section");

function activeNavLink() {
  sections.forEach((section, index) => {
    const top = section.offsetTop - 50;
    const bottom = top + section.clientHeight;

    if (window.scrollY >= top) {
      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
    }

    if (window.scrollY >= bottom) {
      document.querySelector(".contact-link").classList.add("active");
      document.querySelector(".projects-link").classList.remove("active");
    } else {
      document.querySelector(".contact-link").classList.remove("active");
    }
  });
}

window.addEventListener("scroll", activeNavLink);

const header = document.querySelector(".header");
const scrollThreshold = 10;

window.addEventListener("scroll", () => {
  if (window.scrollY > scrollThreshold) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const mobileMenu = document.querySelector(".mobile-menu");
const mobileList = document.querySelector(".mobile-list");
const openMenuBtn = document.querySelector(".burger-menu");
const closeMenuBtn = document.querySelector(".mobile-button");

const toggleMenu = () => {
  const isMenuOpen =
    openMenuBtn.getAttribute("aria-expanded") === "true" || false;
  openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
  mobileMenu.classList.toggle("is-open");

  if (!isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
};

mobileList.addEventListener("click", toggleMenu);
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
  if (!e.matches) return;
  mobileMenu.classList.remove("is-open");
  openMenuBtn.setAttribute("aria-expanded", false);
});
