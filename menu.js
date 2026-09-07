(() => {
  "use strict";

  const tabs = document.querySelectorAll(".menu-tab");
  const categories = document.querySelectorAll(".menu-category");

  if (!tabs.length || !categories.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetId = tab.dataset.target;

      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      categories.forEach((cat) => {
        cat.classList.toggle("is-active", cat.id === targetId);
      });

      const activeCat = document.getElementById(targetId);
      if (activeCat) {
        const top = activeCat.getBoundingClientRect().top + window.scrollY - 140;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
})();
