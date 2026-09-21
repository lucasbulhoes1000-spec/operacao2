document.addEventListener("DOMContentLoaded", function () {

  /*
  ============================================================
  ACCORDIONS
  ============================================================
  Dentro de cada grupo, apenas um item fica aberto por vez.
  */

  const accordionGroups = document.querySelectorAll(
    ".accordion-grid, .structure-list, .faq-list"
  );

  accordionGroups.forEach(function (group) {

    const items = group.querySelectorAll("details");

    items.forEach(function (item) {

      item.addEventListener("toggle", function () {

        if (!item.open) {
          return;
        }

        items.forEach(function (otherItem) {

          if (otherItem !== item) {
            otherItem.open = false;
          }

        });

      });

    });

  });


  /*
  ============================================================
  SCROLL SUAVE
  ============================================================
  */

  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });

  });

});
