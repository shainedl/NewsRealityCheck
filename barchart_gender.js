
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Female Agree", "Female Strongly Agree", "Male Agree",
      "Male Neutral", "Male Strongly Agree", "Non-binary/Third gender Agree",
      "Non-binary/Third gender Neutral", "Prefer not to say Strongly Agree"],
      datasets: [
        {
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#2a2099", "#E59CF0", "#9CF0A9"],
          data: [5, 10, 3, 2, 17, 1, 1, 1]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
      }
    }
});
