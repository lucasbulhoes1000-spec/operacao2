document.addEventListener("DOMContentLoaded", function () {

  const groups = document.querySelectorAll(
    ".accordion-grid, .structure-list, .faq-list"
  );

  groups.forEach(function (group) {

    const items = group.querySelectorAll("details");

    items.forEach(function (item) {

      item.addEventListener("toggle", function () {

        if (!item.open) {
          return;
        }

        items.forEach(function (other) {

          if (other !== item) {
            other.open = false;
          }

        });

      });

    });

  });


  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const href = link.getAttribute("href");

      if (!href || href === "#") {
        return;
      }

      const target = document.querySelector(href);

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
