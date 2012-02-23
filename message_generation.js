//Creates an array to store all the different onClick messages
var element = new Array(numberColumns); for ( var i = 0; i < numberRows; i++) { element[i] = new Array(); }

for (var i = 0; i < numberRows; i++)
{
	for (var j = 0; j < numberColumns; j++)
	{
		//get the good tag
		element[i].push(document.querySelector('#__' + j + ' ' + '._' + i));
		//add the onClick event
		element[i][j].onclick = ( function(x, y) 	{ 
											return function()
											{ 
												sendMessage('__' + x + '-' + '_' + y + '-' + randomColor + '-' + myID) ;								
											} 
										} ) (j, i);
	}
}