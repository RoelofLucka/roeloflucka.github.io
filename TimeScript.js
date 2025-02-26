// Existing data arrays
let yArray2 = [12, 23, 5, 6, 5, 22, 14, 20, 30, 43, 14, 23, 14, 16, 5, 26, 33, 49, 4, 28, 43, 10, 14, 188, 13, 18, 17, 62, 10, 11, 15, 94, 35, 258, 9, 7, 12, 72, 6, 18, 3, -14, 6, 9, 9, 8, 20, 26, 85, 89, 106, 31, 1, 47, 227, 48, 53, 120, 45, 21, 37, 48, 58, 20, 21, 30, 25, 13, 62, 54, 24, 108, 112, 40, 19, 86, 35, 52, 156, 18, 120, 34, 135, 23, 119, 3, 3, 6, 2, 4, 6, 31, 99, 37, 31, 76, 18, 22, 146, 30, 92, 12, 29, 39, 37, 35, 36, 27, 95, 22, 15, 70, 161, 99, 33, 177, 185, 46, 55, 34, 70, 205, 12, 22, 5, 0, 8, 9, 76, 27, 115, 66, 32, 49, 284, 117, 158, 204, 6, 5, 63, 220, 85, 8, 4, 232, 124, 135, 46, 186, 38, 129, 71, 23, 134, 22, 69, 13, 34, 13, 24, 78, 68, 10, 8, 25, 25, 18, 20, 74, 87, 42, 118, 162, 53, 47, 552, 154, 51, 80, 89, 4, 106, 45, 20, 33, 513, 13, 85, 70, 39, 49, 20, 18, 5, 11, 69, 18, 47, 55, 28, 24, 50, 24, 80, 49, 35];
let numbers = [...yArray2]; // Reuse yArray2 for numbers
let yArray23 = []
// Define the updated layout with a smaller size
let updatedLayout = {
    xaxis: { range: [0, 208], title: "Fight Number" },
    yaxis: { range: [0, 60], title: "Time in minutes" },
    title: "Avg preptime",
};

let updatedLayout2 = {
    xaxis: { range: [0, 208], title: "Fight Number" },
    yaxis: { range: [0, 600], title: "Time in minutes" },
    title: "Preptime for fights",
};

let averages = [];
let sum = 0;

// Calculate averages
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    averages.push(sum / (i + 1)); // Calculate average up to the current element
}

// Define x values for the plot
let xArray2 = Array.from({ length: 208 }, (_, i) => i + 1);

// Initial Plot Data
const data2 = [{
    x: xArray2,
    y: yArray2,
    mode: "markers"
}];

const data = [{
    x: xArray2,
    y: averages,
    mode: "lines"
}];

// Initial Layout
const layout2 = {
    xaxis: { range: [0, 208], title: "Fight Number" },
    yaxis: { range: [0, 600], title: "Time in minutes" },
    title: "Preptime for fights",
    width: 700, // Initial width for the smaller layout
};

const layout = {
    xaxis: { range: [0, 208], title: "Fight Number" },
    yaxis: { range: [0, 120], title: "Time in minutes" },
    title: "Avg preptime",
    width: 700, // Initial width for the smaller layout
};

// Function to update the plot when switching splits
function switchSplit3(myIndex, textContent) {
    // Update the split label
    document.getElementById("curSplit").textContent = textContent;

    // Switch the y data depending on the index
    let updatedData;
    if (myIndex === 0) {
        yArray23 = yArray2
        numbers = [...yArray23]; // Reuse yArray2 for numbers
        averages = [];
        sum = 0;
        updatedLayout = {
            xaxis: { range: [0, 208], title: "Fight Number" },
            yaxis: { range: [0, 120], title: "Time in minutes" },
            title: "Avg preptime",
        };
        
        updatedLayout2 = {
            xaxis: { range: [0, 208], title: "Fight Number" },
            yaxis: { range: [0, 600], title: "Time in minutes" },
            title: "Preptime for fights",
        };
        // Calculate averages
        for (let i = 0; i < yArray23.length; i++) {
            sum += numbers[i];
            averages.push(sum / (i + 1)); // Calculate average up to the current element
        }

    } else if (myIndex === 1) {
        yArray23 = yArray2.slice(0, 27);
        numbers = [...yArray23]; // Reuse yArray2 for numbers
        averages = [];
        sum = 0;
        updatedLayout = {
            xaxis: { range: [0, 28], title: "Fight Number" },
            yaxis: { range: [0, 120], title: "Time in minutes" },
            title: "Avg preptime",
        };
        
        updatedLayout2 = {
            xaxis: { range: [0, 28], title: "Fight Number" },
            yaxis: { range: [0, 600], title: "Time in minutes" },
            title: "Preptime for fights",
        };
        // Calculate averages
        for (let i = 0; i < yArray23.length; i++) {
            sum += numbers[i];
            averages.push(sum / (i + 1)); // Calculate average up to the current element
        }

    } else if (myIndex === 2) {
        yArray23 = yArray2.slice(27, 37);
        numbers = [...yArray23]; // Reuse yArray2 for numbers
        averages = [];
        sum = 0;
        updatedLayout = {
            xaxis: { range: [0, 11], title: "Fight Number" },
            yaxis: { range: [0, 120], title: "Time in minutes" },
            title: "Avg preptime",
        };
        
        updatedLayout2 = {
            xaxis: { range: [0, 11], title: "Fight Number" },
            yaxis: { range: [0, 600], title: "Time in minutes" },
            title: "Preptime for fights",
        };
        // Calculate averages
        for (let i = 0; i < yArray23.length; i++) {
            sum += numbers[i];
            averages.push(sum / (i + 1)); // Calculate average up to the current element
        }
    }else if (myIndex === 3) {
        yArray23 = yArray2.slice(37, 62);
        numbers = [...yArray23]; // Reuse yArray2 for numbers
        averages = [];
        sum = 0;
        updatedLayout = {
            xaxis: { range: [0, 26], title: "Fight Number" },
            yaxis: { range: [0, 120], title: "Time in minutes" },
            title: "Avg preptime",
        };
        
        updatedLayout2 = {
            xaxis: { range: [0, 26], title: "Fight Number" },
            yaxis: { range: [0, 600], title: "Time in minutes" },
            title: "Preptime for fights",
        };
        // Calculate averages
        for (let i = 0; i < yArray23.length; i++) {
            sum += numbers[i];
            averages.push(sum / (i + 1)); // Calculate average up to the current element
        }
    } else if (myIndex === 4) {
        yArray23 = yArray2.slice(62, 84);
        numbers = [...yArray23]; // Reuse yArray2 for numbers
        averages = [];
        sum = 0;
        updatedLayout = {
            xaxis: { range: [0, 23], title: "Fight Number" },
            yaxis: { range: [0, 120], title: "Time in minutes" },
            title: "Avg preptime",
        };
        
        updatedLayout2 = {
            xaxis: { range: [0, 23], title: "Fight Number" },
            yaxis: { range: [0, 600], title: "Time in minutes" },
            title: "Preptime for fights",
        };
        // Calculate averages
        for (let i = 0; i < yArray23.length; i++) {
            sum += numbers[i];
            averages.push(sum / (i + 1)); // Calculate average up to the current element
        }
    } else if (myIndex === 5) {
        yArray23 = yArray2.slice(84, 150);
        numbers = [...yArray23]; // Reuse yArray2 for numbers
        averages = [];
        sum = 0;
        updatedLayout = {
            xaxis: { range: [0, 67], title: "Fight Number" },
            yaxis: { range: [0, 120], title: "Time in minutes" },
            title: "Avg preptime",
        };
        
        updatedLayout2 = {
            xaxis: { range: [0, 67], title: "Fight Number" },
            yaxis: { range: [0, 600], title: "Time in minutes" },
            title: "Preptime for fights",
        };
        // Calculate averages
        for (let i = 0; i < yArray23.length; i++) {
            sum += numbers[i];
            averages.push(sum / (i + 1)); // Calculate average up to the current element
        }
    } else if (myIndex === 6) {
        yArray23 = yArray2.slice(150, 189);
        numbers = [...yArray23]; // Reuse yArray2 for numbers
        averages = [];
        sum = 0;
        updatedLayout = {
            xaxis: { range: [0, 40], title: "Fight Number" },
            yaxis: { range: [0, 120], title: "Time in minutes" },
            title: "Avg preptime",
        };
        
        updatedLayout2 = {
            xaxis: { range: [0, 40], title: "Fight Number" },
            yaxis: { range: [0, 600], title: "Time in minutes" },
            title: "Preptime for fights",
        };
        // Calculate averages
        for (let i = 0; i < yArray23.length; i++) {
            sum += numbers[i];
            averages.push(sum / (i + 1)); // Calculate average up to the current element
        }
    } else if (myIndex === 7) {
        yArray23 = yArray2.slice(189, 250);
        numbers = [...yArray23]; // Reuse yArray2 for numbers
        averages = [];
        sum = 0;
        updatedLayout = {
            xaxis: { range: [0, 50], title: "Fight Number" },
            yaxis: { range: [0, 120], title: "Time in minutes" },
            title: "Avg preptime",
        };
        
        updatedLayout2 = {
            xaxis: { range: [0, 50], title: "Fight Number" },
            yaxis: { range: [0, 600], title: "Time in minutes" },
            title: "Preptime for fights",
        };
        // Calculate averages
        for (let i = 0; i < yArray23.length; i++) {
            sum += numbers[i];
            averages.push(sum / (i + 1)); // Calculate average up to the current element
        }
    } 
    updatedData = [{
        x: xArray2,
        y: yArray23,
        mode: "markers"
    }];
    updatedData2 = [{
        x: xArray2,
        y: averages,
        mode: "lines"
    }];


    // Update the plot dynamically using Plotly.react()

    Plotly.react("myPlot2", updatedData, updatedLayout2); // Updates the plot with new data and layout
    Plotly.react("myPlot", updatedData2, updatedLayout); // Updates the second plot similarly if needed

}

// Initialize the first plot
Plotly.newPlot("myPlot", data, layout);
Plotly.newPlot("myPlot2", data2, layout2);

