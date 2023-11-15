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
          "#0284c7",
          "#4f46e5",
          "#7c3aed",
          "#db2777",
          "#e11d48",
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
                  "#0284c7",
                  "#4f46e5",
                  "#7c3aed",
                  "#db2777",
                  "#e11d48",
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
          .getElementById("graficoProductosMasGananciasPie")
          .getContext("2d");
        var chart = new Chart(ctx, {
          type: "pie",
          data: {
            labels: nombreProducto,
            datasets: [
              {
                data: totalVentas,
                backgroundColor: [
                  "#0284c7",
                  "#4f46e5",
                  "#7c3aed",
                  "#db2777",
                  "#e11d48",
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
                  "#0284c7",
                  "#4f46e5",
                  "#7c3aed",
                  "#db2777",
                  "#e11d48",
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
          .getElementById("graficoProductosMasVendidoBar")
          .getContext("2d");
        var chart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: nombreProducto,
            datasets: [
              {
                data: totalCantidad,
                backgroundColor: [
                  "#0284c7",
                  "#4f46e5",
                  "#7c3aed",
                  "#db2777",
                  "#e11d48",
                ],
              },
              {
                label: 'Linea de crecimiento',
                type : 'line',
                data : totalCantidad,
                fill: false,
                borderColor: '#16a34a',
                borderWidth: 2,

                pointBackgroundColor: "#16a34a", // Color de los puntos
              }
            ],
          },
          options: {
            animations: {
              tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                position: 'top',
                offset: true,
                offsetAmount: 10,
              }
            }
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
          .getElementById("graficoProductosMasVendidoPie")
          .getContext("2d");
        var chart = new Chart(ctx, {
          type: "pie",
          data: {
            labels: nombreProducto,
            datasets: [
              {
                data: totalCantidad,
                backgroundColor: [
                  "#0284c7",
                  "#4f46e5",
                  "#7c3aed",
                  "#db2777",
                  "#e11d48",
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
                label: 'Cantidad Vendida',
                data: totalFechas,
                backgroundColor: [
                  "#0284c7",
                  "#4f46e5",
                  "#7c3aed",
                  "#db2777",
                  "#e11d48",
                ],
                
                borderWidth: 2,
              },
              {
                label: 'Linea de crecimiento',
                type: 'line',
                data: totalFechas,
                fill: false,
                borderColor: '#16a34a',
                borderWidth: 2,

                pointBackgroundColor: "#16a34a", // Color de los puntos
              },
            ],
          },
          options: {
            animations: {
              tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                position: 'top',
                offset: true,
                offsetAmount: 10,
              }
            }
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
          .getElementById("graficoProductosMasGananciasBar")
          .getContext("2d");
        var chart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: nombreProducto,
            datasets: [
              {
                data: totalVentas,
                backgroundColor: [
                  "#0284c7",
                  "#4f46e5",
                  "#7c3aed",
                  "#db2777",
                  "#e11d48",
                ],
              },
              {
                label: 'Linea de crecimiento',
                type: 'line',
                data: totalVentas,
                fill: false,
                borderColor: '#16a34a',
                borderWidth: 2,

                pointBackgroundColor: "#16a34a", // Color de los puntos
              }
            ],
          },
          options: {
            animations: {
              tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
              }
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                position: 'top',
                offset: true,
                offsetAmount: 10,
              }
            }
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
          .getElementById("graficoProductosMasGananciasPolar")
          .getContext("2d");
        var chart = new Chart(ctx, {
          type: "polarArea",
          data: {
            labels: nombreProducto,
            datasets: [
              {
                data: totalVentas,
                backgroundColor: [
                  "#0284c7",
                  "#4f46e5",
                  "#7c3aed",
                  "#db2777",
                  "#e11d48",
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
          .getElementById("graficoProductosMasVendidoPolar")
          .getContext("2d");
        var chart = new Chart(ctx, {
          type: "polarArea",
          data: {
            labels: nombreProducto,
            datasets: [
              {
                data: totalCantidad,
                backgroundColor: [
                  "#0284c7",
                  "#4f46e5",
                  "#7c3aed",
                  "#db2777",
                  "#e11d48",
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