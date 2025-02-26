// setup 
const data = {
    labels: ['Torterra', 'Roserade', 'Pidgeot', 'Mightyena', 'Masquerain', 'Rapidash', 'Centiskorch', 'Kingdra', 'Crawdaunt', 'Conkeldurr',
    'Qwilfish', 'Luxray', 'Drednaw', 'Hitmonlee', 'Meganium', 'Donphan', 'Togedemaru', 'Mamoswine', 'Krookodile', 
    'Cloyster', 'Torkoal', 'Toxtricity', 'Archeops', 'Escavalier', 'Copperajah', 'Flygon', 'Skuntank', 'Ribombee', 
    'Magmortar', 'Wyrdeer', 'Arcanine', 'Gyarados', 'Greninja', 'Electrode', 'Dhelmise', 'Kangaskhan', 'Corviknight', 
    'Muk', 'Sceptile', 'Barraskewda', 'Alakazam', 'Slowbro'],
    datasets: [{
      label: 'Ko per participation',
      data: [94/89, 35/33, 44/38, 2/7, 7/8, 55/46, 7/8, 5/9, 13/17, 50/41, 
        17/22, 21/27, 22/29, 41/37, 16/18, 25/30, 28/49, 11/11, 23/22, 
        26/24, 8/16, 12/11, 74/45, 16/24, 4/10, 21/19, 12/11, 7/9, 
        2/2, 1/1, 33/25, 12/26, 9/8, 6/7, 3/6, 1/1, 4/6, 
        3/5, 3/3, 7/5, 1/1, 4/5],
      backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1
    }]
  };
  
  const originalLabels = [...data.labels];
  
  // config 
  const config = {
    type: 'bar',
    data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  
  // render init block
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );
  
  // Instantly assign Chart.js version
  const chartVersion = document.getElementById('chartVersion');
  chartVersion.innerText = Chart.version;


  
  
  function switchSplit3(myIndex, textContent) {
    myChart.data.labels = [...originalLabels];
    document.getElementById("curSplit").textContent = textContent;

    const dataSets = [
        [
            94/89, 35/33, 44/38, 2/7, 7/8, 55/46, 7/8, 5/9, 13/17, 50/41, 
            17/22, 21/27, 22/29, 41/37, 16/18, 25/30, 28/49, 11/11, 23/22, 
            26/24, 8/16, 12/11, 74/45, 16/24, 4/10, 21/19, 12/11, 7/9, 
            2/2, 1/1, 33/25, 12/26, 9/8, 6/7, 3/6, 1/1, 4/6, 
            3/5, 3/3, 7/5, 1/1, 4/5
        ],
        [
          0.7857, 1.1875, 1.2500, 0.5000, 1.0000, 1.7000, 0.5000, 1.0000, 0.6000, 1.0000, 1.1667, 1.0000, 0.001, 0, 0, 0, 0, 0, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
        ],   [1.3333, 1.0000, 0, 0.2000, 0.001, 0, 1.0000, 1.0000, 1.0000, 0, 0.7500, 0.6667, 0.5714, 2.2500, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ,
        [1.2727, 1.4000, 0.6667, 0, 0, 1.0000, 0, 0.6667, 0.8333, 0, 0.6667, 0.8571, 0.8000, 1.0000, 1.0000, 1.0000, 0.7000, 1.0000, 0.001, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ,
        [1.0000, 1.0000, 1.0000, 0, 0, 1.1429, 0, 0, 0.8000, 0, 0.5000, 0.4000, 1.0000, 1.0000, 1.0000, 0.5000, 0.6667, 1.0000, 1.3750, 1.5000, 0.6667, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ,
        [1.0357, 0.4000, 1.0000, 0, 0, 1.0625, 0, 0.2500, 0, 1.2609, 0, 0.8571, 1.0000, 0.5556, 0.6667, 0.8000, 0.7647, 1.0000, 1.2500, 0.9000, 0.5000, 1.0000, 1.4815, 0.7778, 1.0000, 1.0000, 1.0000, 0.5000, 1.0000, 1.0000, 0.8889, 0.4000, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ,
        [1.0833, 0, 1.5000, 0, 0, 1.0000, 0, 0, 0, 1.2857, 0, 1.0000, 0.5000, 0.8333, 1.0000, 1.0000, 0.001, 0, 0.001, 0.8000, 0.3333, 1.6667, 1.8333, 0.6364, 0.3333, 1.1667, 0, 1.0000, 1.0000, 0, 1.6364, 0.6154, 1.2000, 1.0000, 0.5000, 1.0000, 0.6667, 0.6667, 1.5000, 2.0000, 0, 0.001]
        ,
        [1.1333, 0, 1.4000, 0, 0, 1.0000, 0, 0, 0, 1.2143, 0, 1.0000, 0.5000, 1.3333, 1.0000, 1.0000, 0.001, 0, 0.5000, 0.8333, 0.3333, 1.2000, 1.8889, 0.6000, 0.2500, 1.2222, 1.3333, 1.0000, 1.0000, 0, 1.5625, 0.5000, 1.1250, 0.8571, 0.5000, 1.0000, 0.6667, 0.6000, 1.0000, 1.4000, 1.0000, 0.8000]
        ,];

    if (myIndex < 0 || myIndex >= dataSets.length) {
        console.log('Invalid index');
        return;
    }

    const newData = [];
    const newLabels = [];

    dataSets[myIndex].forEach((value, i) => {
        if (!isNaN(value) && value !== 0) { // Remove NaN and 0/0 cases
            newData.push(value);
            newLabels.push(originalLabels[i]);
        }
    });

    myChart.data.labels = newLabels;
    myChart.data.datasets[0].data = newData;

    myChart.update();
}

  
  
  function sortLabelsByData() {
    // Get the current labels and data from your chart
    const labels = myChart.data.labels;
    const data = myChart.data.datasets[0].data;
    
    // Combine them into an array of objects
    const combined = labels.map((label, index) => {
      return { label: label, value: data[index] };
    });
    
    // Sort the array by the data value (ascending order)
    combined.sort((a, b) => a.value - b.value);
    
    // Update the chart's labels and data based on the sorted order
    myChart.data.labels = combined.map(item => item.label);
    myChart.data.datasets[0].data = combined.map(item => item.value);
    
    // Update the chart to reflect the changes
    myChart.update();
  }

  function sortLabelsByReversedData() {
    // Get the current labels and data from your chart
    const labels = myChart.data.labels;
    const data = myChart.data.datasets[0].data;
  
    // Combine them into an array of objects
    const combined = labels.map((label, index) => ({
      label: label,
      value: data[index]
    }));
  
    // Sort the array by the data value (descending order)
    combined.sort((a, b) => b.value - a.value);
  
    // Update the chart's labels and data based on the sorted order
    myChart.data.labels = combined.map(item => item.label);
    myChart.data.datasets[0].data = combined.map(item => item.value);
  
    // Update the chart to reflect the changes
    myChart.update();
  }
