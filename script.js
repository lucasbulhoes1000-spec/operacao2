document.addEventListener("DOMContentLoaded", () => {

  // =====================================================
  // ACCORDIONS
  // =====================================================

  const accordionGroups = document.querySelectorAll(
    ".accordion-grid, .structure-list, .methods-list, .faq-list"
  );

  accordionGroups.forEach((group) => {

    const items = group.querySelectorAll("details");

    items.forEach((item) => {

      item.addEventListener("toggle", () => {

        if (!item.open) {
          return;
        }

        items.forEach((otherItem) => {

          if (otherItem !== item) {
            otherItem.open = false;
          }

        });

      });

    });

  });


  // =====================================================
  // POPUP DE APLICAÇÃO
  // =====================================================

  const modal = document.getElementById("applicationModal");

  const openButtons = document.querySelectorAll(
    ".js-open-application"
  );

  const closeButtons = document.querySelectorAll(
    ".js-close-application"
  );

  const applicationForm = document.getElementById(
    "applicationForm"
  );

  const applicationStep = document.querySelector(
    ".application-step"
  );

  const applicationSuccess = document.getElementById(
    "applicationSuccess"
  );


  function openApplicationModal() {

    if (!modal) {
      return;
    }

    modal.classList.add("is-open");

    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "modal-open"
    );


    window.setTimeout(() => {

      const firstInput = modal.querySelector(
        "input"
      );

      if (firstInput) {
        firstInput.focus();
      }

    }, 150);

  }


  function closeApplicationModal() {

    if (!modal) {
      return;
    }

    modal.classList.remove(
      "is-open"
    );

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "modal-open"
    );

  }


  openButtons.forEach((button) => {

    button.addEventListener(
      "click",
      openApplicationModal
    );

  });


  closeButtons.forEach((button) => {

    button.addEventListener(
      "click",
      closeApplicationModal
    );

  });


  document.addEventListener(
    "keydown",
    (event) => {

      if (
        event.key === "Escape" &&
        modal &&
        modal.classList.contains("is-open")
      ) {

        closeApplicationModal();

      }

    }
  );


  // =====================================================
  // MÁSCARA DO WHATSAPP
  // =====================================================

  const phoneInput = document.getElementById(
    "telefone"
  );

  if (phoneInput) {

    phoneInput.addEventListener(
      "input",
      (event) => {

        let value = event.target.value.replace(
          /\D/g,
          ""
        );

        value = value.substring(
          0,
          11
        );


        if (value.length > 10) {

          value = value.replace(
            /^(\d{2})(\d{5})(\d{4})$/,
            "($1) $2-$3"
          );

        } else if (value.length > 6) {

          value = value.replace(
            /^(\d{2})(\d{4})(\d{0,4})$/,
            "($1) $2-$3"
          );

        } else if (value.length > 2) {

          value = value.replace(
            /^(\d{2})(\d+)/,
            "($1) $2"
          );

        } else if (value.length > 0) {

          value = value.replace(
            /^(\d*)/,
            "($1"
          );

        }


        event.target.value = value;

      }
    );

  }


  // =====================================================
  // ENVIO DO FORMULÁRIO
  //
  // IMPORTANTE:
  // Neste momento ele controla o comportamento visual.
  // Quando conectarmos ao CRM / GHL, a integração entra aqui.
  // =====================================================

  if (applicationForm) {

    applicationForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        if (!applicationForm.checkValidity()) {

          applicationForm.reportValidity();

          return;

        }


        const formData = new FormData(
          applicationForm
        );


        const applicationData = {

          nome:
            formData.get("nome"),

          telefone:
            formData.get("telefone"),

          instagram:
            formData.get("instagram"),

          faturamento:
            formData.get("faturamento"),

          lentes:
            formData.get("lentes")

        };


        console.log(
          "Aplicação Operação 50K:",
          applicationData
        );


        if (applicationStep) {

          applicationStep.classList.add(
            "is-hidden"
          );

        }


        if (applicationSuccess) {

          applicationSuccess.classList.add(
            "is-active"
          );

        }


        applicationForm.reset();

      }
    );

  }


  // =====================================================
  // RESET DO POPUP APÓS FECHAR
  // =====================================================

  if (modal) {

    modal.addEventListener(
      "transitionend",
      () => {

        if (
          !modal.classList.contains("is-open")
        ) {

          if (applicationStep) {

            applicationStep.classList.remove(
              "is-hidden"
            );

          }


          if (applicationSuccess) {

            applicationSuccess.classList.remove(
              "is-active"
            );

          }

        }

      }
    );

  }

});
