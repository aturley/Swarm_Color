//Creation of the columns
var column = [];
var numberColumns = 20;
for (var i = 0; i < numberColumns; i++)
{
	var columnElement = document.createElement('tr');
	columnElement.id = '__' + i;
	column.push(columnElement);
}

//Creation of the rows
var numberRows = 40;
var sizeSquare = 950/numberRows - 3;
//Here, I create a matrix, which will contain all the rows we need
var row = new Array(numberColumns); for ( var i = 0; i < numberRows; i++) { row[i] = new Array(); }
//Loop which create the "td"s tags
for (var i = 0; i < numberRows; i++)
{
	for (var j = 0; j < numberColumns; j++)
	{
		var rowElement = document.createElement('td');
		rowElement.className = '_' + i;
		rowElement.style.width = sizeSquare;
		rowElement.style.height = sizeSquare;
		row[j].push(rowElement);
	}
}

//Insertion of the "td"s in the "tr"s
for (var i = 0; i < numberColumns; i++)
{
	for(var j = 0; j < numberRows; j++)
	{
		column[i].appendChild(row[i][j]);
	}
}

//Insertion of the "tr"s in the table
for (var i = 0; i < numberColumns; i++)
{
	document.querySelector('.tableGeneration').appendChild(column[i]);
}
