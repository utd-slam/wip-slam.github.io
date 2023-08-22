const cellVariables = [];

// URL of the published Google Sheet (replace with your URL)
const sheetUrl = 'https://raw.githubusercontent.com/utd-slam/wip-slam.github.io/master/Website_Database.csv'

// Fetch data from the published Google Sheet
fetch(sheetUrl)
.then(response => response.text())
.then(data => {
  const rows = data.split('\n');
  
  // Initialize an array to store variables for each cell
  const cellVariables = [];
  
  // Iterate through rows
  for (const row of rows) {
    const columns = row.split(',');
    
    // Iterate through columns within the row
    for (const columnData of columns) {
      // Push each cell's data to the cellVariables array
      cellVariables.push(columnData);
    }
  }
  
  // Now the cellVariables array contains data from each cell
  console.log(cellVariables);

  const outputElement = document.getElementById('output');
  
  // Update HTML elements using cellVariables
  for (const cellData of cellVariables) {
    const cellElement = document.createElement('p');
    cellElement.textContent = cellData;
    outputElement.appendChild(cellElement);
  }
});