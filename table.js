const table = document.getElementsByClassName('table')[0]; // Assuming you have only one table with the 'table' class

const dataArray = [];

// Iterate over table rows
const rows = table.querySelectorAll('tr');
rows.forEach(row => {
  const rowData = [];
  const cells = row.querySelectorAll('td, th');
  cells.forEach(cell => {
    rowData.push(cell.textContent.trim()); // Trim to remove leading/trailing whitespace
  });
  dataArray.push(rowData);
});

// Convert the dataArray to CSV format
const csvContent = dataArray.map(row => row.join(',')).join('\n');

console.log(csvContent); // Output the CSV data to the console

// If you want to save the CSV data to a file, you can use the File System API (Node.js) or the Blob API (browser).
