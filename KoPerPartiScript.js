// setup 
const data = {
    labels: ['Torterra', 'Roserade', 'Pidgeot', 'Mightyena', 'Masquerain', 'Rapidash', 'Centiskorch', 'Kingdra', 'Crawdaunt', 'Conkeldurr',
    'Qwilfish', 'Luxray', 'Drednaw', 'Hitmonlee', 'Meganium', 'Donphan', 'Togedemaru', 'Mamoswine', 'Krookodile', 
    'Cloyster', 'Torkoal', 'Toxtricity', 'Archeops', 'Escavalier', 'Copperajah', 'Flygon', 'Skuntank', 'Ribombee', 
    'Magmortar', 'Wyrdeer', 'Arcanine', 'Gyarados', 'Greninja', 'Electrode', 'Dhelmise', 'Kangaskhan', 'Corviknight', 
    'Muk', 'Sceptile', 'Barraskewda'],
    datasets: [{
      label: 'Ko per participation',
      data: [18, 12, 6, 9, 12, 3, 9, 18, 12, 6, 9, 12, 3, 9, 18, 12, 6, 9, 12, 3, 9, 18, 12, 6, 9, 12, 3, 9, 18, 12, 6, 9, 12, 3, 9, 18, 12, 6, 9, 12, 3, 9, 18, 12, 6, 9, 12, 3, 9],
      backgroundColor: [
        'rgba(255, 26, 104, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(0, 0, 0, 0.2)'
      ],
      borderColor: [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
      ],
      borderWidth: 1
    }]
  };
  
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
    document.getElementById("curSplit").textContent = textContent;
  
    // Define different data arrays for each index
    const data0 = [110, 15, 8, 13, 10, 5, 8, 12, 14, 7, 10, 13, 6, 8, 17, 14, 9, 11, 15, 4, 8, 17, 11, 7, 10, 14, 5, 8, 16, 11, 7, 10, 5, 8, 17, 11, 6, 8, 15, 12, 6, 9, 18, 12, 5, 9, 15, 11, 9];
    const data1 = [10, 15, 8, 13, 10, 5, 8, 12, 14, 7, 10, 13, 6, 8, 17, 14, 9, 11, 15, 4, 8, 17, 11, 7, 10, 14, 5, 8, 16, 11, 7, 10, 5, 8, 17, 11, 6, 8, 15, 12, 6, 9, 18, 12, 5, 9, 15, 11, 9];
    const data2 = [20, 25, 18, 23, 19, 15, 18, 22, 24, 17, 20, 23, 16, 18, 27, 24, 19, 21, 25, 14, 18, 27, 21, 17, 20, 24, 15, 18, 26, 21, 17, 20, 15, 18, 27, 21, 16, 18, 25, 22, 16, 19, 28, 22, 15, 19, 25, 21, 19];
    const data3 = [5, 8, 2, 7, 4, 3, 6, 9, 12, 5, 8, 7, 6, 9, 10, 8, 7, 9, 5, 6, 8, 12, 9, 6, 8, 10, 7, 9, 6, 8, 9, 5, 7, 6, 8, 10, 5, 7, 9, 8, 6, 7, 8, 5, 6, 7, 9, 6, 8];
    const data4 = [30, 35, 28, 33, 29, 25, 28, 32, 34, 27, 30, 33, 26, 28, 37, 34, 29, 31, 35, 24, 28, 37, 31, 27, 30, 34, 25, 28, 36, 31, 27, 30, 25, 28, 37, 31, 26, 28, 35, 32, 26, 29, 38, 32, 25, 29, 35, 31, 29];
  
    // Set the data based on the myIndex value
    switch (myIndex) {
        case 0:
        myChart.data.datasets[0].data = data0;
        break;
      case 1:
        myChart.data.datasets[0].data = data1;
        break;
      case 2:
        myChart.data.datasets[0].data = data2;
        break;
      case 3:
        myChart.data.datasets[0].data = data3;
        break;
      case 4:
        myChart.data.datasets[0].data = data4;
        break;
      default:
        console.log('Invalid index');
        return; // exit the function if an invalid index is passed
    }
  
    // Optionally, update the chart with the new data
    myChart.update();
  }
  