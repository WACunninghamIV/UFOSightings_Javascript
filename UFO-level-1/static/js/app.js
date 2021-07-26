// from data.js


const tableData = data;

var ETData = data;
var tbody = d3.select('tbody');
var button = d3.select('button');

populateTable(tableData);
button.on('click',handleClick);

 // When the page loads, it needs to display the table
  // But if the table reloads then you may need to ensure the 
  // previous output is cleared/overwritten from scratch 

function populateTable(data) {
    tbody.html('');
    data.forEach(obj => {
        var row = tbody.append('tr');

        Object.values(obj).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        });
    });
};

// Grab the datetime value from the filter
  

  // grab all the table data and set to filteredData
  
  // Check to see if a date was entered and filter the
  // data using that date.

function handleClick() {
    var date = d3.select('input').property('value');
    var filteredData = data;
    
    if(date){
        var filteredData = data.filter(obj => obj.datetime == date);
        d3.select('input').property('value','');
    };

    populateTable(filteredData);
};