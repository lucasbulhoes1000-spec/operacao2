document
  .querySelectorAll(".accordion details")
  .forEach((detail) => {

    detail.addEventListener("toggle", () => {

      if (!detail.open) return;

      const accordion = detail.parentElement;

      accordion
        .querySelectorAll("details")
        .forEach((otherDetail) => {

          if (otherDetail !== detail) {
            otherDetail.open = false;
          }

        });

    });

  });
