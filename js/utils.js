/* ========================= */
/* AUTO FIT PAGE */
/* ========================= */

function autoFitResume() {

  const page =
    document.getElementById(
      "resumePreview"
    );

  if(!page) return;

  requestAnimationFrame(() => {

    const contentHeight =
      page.scrollHeight;

    /* A4 */

    if(
      appState.paperSize === "a4"
    ) {

      if(contentHeight > 1123) {

        page.style.transform =
          `scale(${
            1123 / contentHeight
          })`;

      }

      else {

        page.style.transform =
          "scale(1)";
      }

    }

    /* LEGAL */

    if(
      appState.paperSize === "legal"
    ) {

      if(contentHeight > 1344) {

        page.style.transform =
          `scale(${
            1344 / contentHeight
          })`;

      }

      else {

        page.style.transform =
          "scale(1)";
      }

    }

  });

}