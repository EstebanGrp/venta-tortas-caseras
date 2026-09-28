const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", (e) => {
  e.stopPropagation();
  navLinks?.classList.toggle("open");
  menuBtn.setAttribute(
    "aria-expanded",
    navLinks?.classList.contains("open") ? "true" : "false"
  );
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
  });
});

// Cerrar menú al hacer click fuera
document.addEventListener("click", (e) => {
  if (!navLinks?.classList.contains("open")) return;
  if (menuBtn?.contains(e.target) || navLinks.contains(e.target)) return;
  navLinks.classList.remove("open");
  menuBtn?.setAttribute("aria-expanded", "false");
});
