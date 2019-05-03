new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Agree", "Neutral", "Strongly Agree"],
      datasets: [{
        label: "Number Agree",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [9,3,28]
      }]
    },
    options: {
      title: {
        display: true,
      }
    }
});
