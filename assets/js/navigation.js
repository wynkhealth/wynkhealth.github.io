(() => {
  const button = document.querySelector(".menu-toggle");
  const menu = document.getElementById("site-nav");
  if (!button || !menu) return;
  function closeMenu() {
    button.setAttribute("aria-expanded", "false");
    menu.classList.remove("is-open");
  }
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("is-open", !expanded);
  });
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      button.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      button.focus();
    }
  });
  window.matchMedia("(min-width: 901px)").addEventListener("change", closeMenu);
})();

// Animate only when observed; content remains visible if JavaScript is unavailable.
if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document
    .querySelectorAll(".hardware-panel, .manifesto h2, .story-heading, .value")
    .forEach((element) => observer.observe(element));
}
