new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: {
      labels: ["Agree", "Neutral", "Strongly Agree"],
      datasets: [
        {
          label: "Female",
          fill: true,
          backgroundColor: "rgba(255,195,77,0.2)",
          borderColor: "rgba(255,195,77,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(255,195,77,1)",
          data: [5, 0, 10]
        }, {
          label: "Male",
          fill: true,
          backgroundColor: "rgba(179,181,198,0.2)",
          borderColor: "rgba(179,181,198,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(179,181,198,1)",
          data: [3, 2, 17]
        }, {
          label: "Non-binary/Third gender",
          fill: true,
          backgroundColor: "rgba(27,179,103,0.2)",
          borderColor: "rgba(27,179,103,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(27,179,103,1)",
          pointBorderColor: "#fff",
          data: [1, 1, 0]
        }, {
          label: "Prefer not to say",
          fill: true,
          backgroundColor: "rgba(125,18,179,0.2)",
          borderColor: "rgba(125,18,179,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(125,18,179,1)",
          pointBorderColor: "#fff",
          data: [0, 0, 1]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Distribution in % of world population'
      }
    }
});
