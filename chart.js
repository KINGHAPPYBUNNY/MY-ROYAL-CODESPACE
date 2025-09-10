<script>
  // Pie Chart
  const ctxPie = document.getElementById('myPieChart').getContext('2d');
  new Chart(ctxPie, {
    type: 'pie',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
      datasets: [{
        label: 'Votes',
        data: [12, 19, 3, 5, 2], // Values
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'green',
          'purple'
        ]
      }]
    }
  });

  // Bar Chart
  const ctxBar = document.getElementById('myBarChart').getContext('2d');
  new Chart(ctxBar, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
      datasets: [{
        label: 'Votes',
        data: [12, 19, 3, 5, 2], // Values
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'green',
          'purple'
        ]
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
</script>
