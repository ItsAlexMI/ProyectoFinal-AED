document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("formulario")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      fetch("/vender-producto", {
        method: "POST",
        body: new FormData(this),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.success) {
            Swal.fire({
              icon: "success",
              title: "¡Éxito!",
              text: response.message,
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "¡Error!",
              text: response.message,
            });
          }
        })
        .catch((error) => console.error("Error en la solicitud AJAX", error));
    });
});

document.getElementById("config-button").addEventListener("click", function () {
  var configOptions = document.getElementById("config-options");

  if (configOptions.classList.contains("hidden")) {
    configOptions.classList.remove("hidden");
  } else {
    configOptions.classList.add("hidden");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const sidebar = document.querySelector("#sidebar");
    sidebar.classList.add("visible");
  }, 1000);
});

const sidebar = document.getElementById("sidebar");
const toggleSidebar = document.getElementById("toggleSidebar");
const sidebarText = document.querySelectorAll(".text");
let sidebarExpanded = false;

toggleSidebar.addEventListener("click", () => {
  sidebarExpanded = !sidebarExpanded;
  if (sidebarExpanded) {
    sidebar.classList.remove("w-16");
    sidebar.classList.add("w-64");
    sidebarText.forEach((item) => {
      item.classList.remove("hidden");
    });
  } else {
    sidebar.classList.remove("w-64");
    sidebar.classList.add("w-16");
    sidebarText.forEach((item) => {
      item.classList.add("hidden");
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      const navbar = document.querySelector(".navbar");
      const sidebar = document.querySelector("#sidebar");
      const configText = document.getElementById("config-text");

      navbar.classList.add("visible");
      sidebar.classList.add("visible");

      const toggleSidebar = document.getElementById("toggleSidebar");
      let sidebarExpanded = false;

      toggleSidebar.addEventListener("click", () => {
        sidebarExpanded = !sidebarExpanded;
        if (sidebarExpanded) {
          sidebar.classList.remove("w-16");
          sidebar.classList.add("w-64");
          sidebarText.forEach((item) => {
            item.classList.remove("hidden");
          });
          configText.classList.remove("hidden");
        } else {
          sidebar.classList.remove("w-64");
          sidebar.classList.add("w-16");
          sidebarText.forEach((item) => {
            item.classList.add("hidden");
          });
          configText.classList.add("hidden");
        }
      });
    }, 1000);
  });

  const toggleButtons = document.getElementById("toggleButtons");
  const buttonDropdown = document.getElementById("buttonDropdown");

  toggleButtons.addEventListener("click", () => {
    buttonDropdown.classList.toggle("hidden");
  });

  const prevPageButton = document.getElementById("prevPage");
  const nextPageButton = document.getElementById("nextPage");
  const itemsPerPage = 10;
  let currentPage = 1;

  function showPage(page) {
    const rows = document.querySelectorAll(".pagination");
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    rows.forEach((row, index) => {
      if (index >= startIndex && index < endIndex) {
        row.style.display = "table-row";
      } else {
        row.style.display = "none";
      }
    });
  }

  prevPageButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });

  nextPageButton.addEventListener("click", () => {
    const totalRows = document.querySelectorAll(".pagination").length;
    const totalPages = Math.ceil(totalRows / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  showPage(currentPage);