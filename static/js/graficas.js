$(document).ready(function () {
    $.ajax({
      url: "/Stock",
      method: "GET",
      success: function (data) {
        var nombresProductos = data.map(function (producto) {
          return producto.NombreProducto;
        });

        var cantidadesProductos = data.map(function (producto) {
          return producto.Cantidad;
        });
        var barColors = [
          "#b91d47",
          "#00aba9",
          "#2b5797",
          "#e8c3b9",
          "#1e7145",
        ];
        var ctx = document
          .getElementById("graficoProductosMasVendidos")
          .getContext("2d");
        var chart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: nombresProductos,
            datasets: [
              {
                label: "Cantidades en stock",
                data: cantidadesProductos,
                backgroundColor: barColors,
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      },
      error: function (error) {
        console.error("Error al cargar datos: " + error);
      },
    });
  });

  $(document).ready(function () {
    $.ajax({
      url: "/Ganancias",
      method: "GET",
      success: function (data) {
        var nombreProducto = data.map(function (producto) {
          return producto.NombreProductoVendido;
        });

        var totalVentas = data.map(function (producto) {
          return producto.TotalVentas;
        });

        var ctx = document
          .getElementById("graficoProductosMasGanancias")
          .getContext("2d");
        var chart = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: nombreProducto,
            datasets: [
              {
                data: totalVentas,
                backgroundColor: [
                  "#b91d47",
                  "#00aba9",
                  "#2b5797",
                  "#e8c3b9",
                  "#1e7145",
                ],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      },
      error: function (error) {
        console.error("Error al cargar datos: " + error);
      },
    });
  });

  $(document).ready(function () {
    $.ajax({
      url: "/ProductoMasVendido",
      method: "GET",
      success: function (data) {
        var nombreProducto = data.map(function (producto) {
          return producto.NombreProductoVendido;
        });

        var totalCantidad = data.map(function (producto) {
          return producto.CantidadVendida;
        });

        var ctx = document
          .getElementById("graficoProductosMasVendido")
          .getContext("2d");
        var chart = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: nombreProducto,
            datasets: [
              {
                data: totalCantidad,
                backgroundColor: [
                  "#b91d47",
                  "#00aba9",
                  "#2b5797",
                  "#e8c3b9",
                  "#1e7145",
                ],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });
      },
      error: function (error) {
        console.error("Error al cargar datos: " + error);
      },
    });
  });

  $(document).ready(function () {
    $.ajax({
      url: "/Fechas",
      method: "GET",
      success: function (data) {
        var nombreProducto = data.map(function (producto) {
          return new Date(producto.FechaVenta).toLocaleDateString();
        });

        var totalFechas = data.map(function (producto) {
          return producto.CantidadVendida;
        });

        var ctx = document.getElementById("graficoFechas").getContext("2d");
        var chart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: nombreProducto,
            datasets: [
              {
                data: totalFechas,
                backgroundColor: [
                  "#b91d47",
                  "#00aba9",
                  "#2b5797",
                  "#e8c3b9",
                  "#1e7145",
                ],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        });

        chart.options.plugins.legend.display = false;
        chart.update();
      },
      error: function (error) {
        console.error("Error al cargar datos: " + error);
      },
    });
  });