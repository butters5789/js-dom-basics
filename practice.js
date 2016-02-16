var animals = {
  cow: 'moo',
  dog: 'bow wow',
  cat: 'meowww',
  crow: 'ca kaw',
  pig: 'oink'
}

var body = document.getElementsByTagName('body')[0];
var table = document.createElement('table');
console.log(table);
body.appendChild(table);

var tableRow1 = document.createElement('tr');
table.appendChild(tableRow1);
var tableData1 = document.createElement('td');
tableRow1.appendChild(tableData1);
var data1 = tableData1.innerText = 'cow';
var tableData2 = document.createElement('td');
tableRow1.appendChild(tableData2);
var data2 = tableData2.innerText = animals.cow;

var tableRow2 = document.createElement('tr');
table.appendChild(tableRow2);
var tableData3 = document.createElement('td');
tableRow2.appendChild(tableData3);
var data3 = tableData3.innerText = 'dog';
var tableData4 = document.createElement('td');
tableRow2.appendChild(tableData4);
var data4 = tableData4.innerText = animals.dog;

var tableRow3 = document.createElement('tr');
table.appendChild(tableRow3);
var tableData5 = document.createElement('td');
tableRow3.appendChild(tableData5);
var data5 = tableData5.innerText = 'cat';
var tableData6 = document.createElement('td');
tableRow3.appendChild(tableData6);
var data6 = tableData6.innerText = animals.cat;

var tableRow4 = document.createElement('tr');
table.appendChild(tableRow4);
var tableData7 = document.createElement('td');
tableRow4.appendChild(tableData7);
var data7 = tableData7.innerText = 'crow';
var tableData8 = document.createElement('td');
tableRow4.appendChild(tableData8);
var data8 = tableData8.innerText = animals.crow;

var tableRow5 = document.createElement('tr');
table.appendChild(tableRow5);
var tableData9 = document.createElement('td');
tableRow5.appendChild(tableData9);
var data9 = tableData9.innerText = 'pig';
var tableData10 = document.createElement('td');
tableRow5.appendChild(tableData10);
var data10 = tableData10.innerText = animals.pig;
