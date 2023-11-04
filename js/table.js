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

// Display on the markup the table csv data from the table.
const currentDiv = document.getElementById('table-output-preview');
const newContent = document.createTextNode(csvContent);
currentDiv.appendChild(newContent);

const blob = new Blob([csvContent], { type: 'csv/text' });
const fileUrl = URL.createObjectURL(blob);
console.log(fileUrl);

const downloadButton = document.getElementById('download-file');
downloadButton.setAttribute('href', fileUrl);

downloadButton.addEventListener('click', e => {

});

