var updateChatter, updateList, connectHandler, errorHandler;

//Here, you need to put your participation API key, your swarm ID and your resource ID !
var myApiKey = '9f1902427fb7159757f45ffe5a321746e4e95bcd';
var mySwarm = '03d7320242228512a19d116ffd70e1c344676fbc';
var myResource = '349b8886737239917a2ccbeabe222dd81e5ab75f';

//Give a special identity to the user
var myID = Math.floor(Math.random()*1000000);

//Generates a random color
var red = Math.floor(Math.random()*256);
var green = Math.floor(Math.random()*256);
var blue = Math.floor(Math.random()*256);
var randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";

//display the random color to the user



//-----------------------------------------------------------------------------------------------------------------------------------------
//Send the message to everybody.
//-----------------------------------------------------------------------------------------------------------------------------------------
sendMessage = function(messageName) 
{
	SWARM.send({ message: messageName })
}

//-----------------------------------------------------------------------------------------------------------------------------------------
//Handle the connection.
//-----------------------------------------------------------------------------------------------------------------------------------------
connectHandler = function() 
{
	console.log('connected');
};

//-----------------------------------------------------------------------------------------------------------------------------------------
//Handle the errors.
//-----------------------------------------------------------------------------------------------------------------------------------------
errorHandler = function(response) 
{
	console.log('Error:');
	console.log(response);
};

//-----------------------------------------------------------------------------------------------------------------------------------------
// alert to new or left chatters, and keep a list of current chatters.
//-----------------------------------------------------------------------------------------------------------------------------------------
updateResources = function(response) 
{
	presence = JSON.parse(response).presence;
};

//-----------------------------------------------------------------------------------------------------------------------------------------
//Update the colour of the elements of the grid
//-----------------------------------------------------------------------------------------------------------------------------------------
updateGrid = function(response) 
{
	message = JSON.parse(response).message;
	var who = presence.from.resource;
	var what = message.payload;
	var whatSplit = what.message.split("-");

	//Display your changes and only yours
	if (whatSplit[3] == myID)
	{
		document.querySelector('#' + whatSplit[0] + ' .' + whatSplit[1]).style.backgroundColor = randomColor;
	}
};

//-----------------------------------------------------------------------------------------------------------------------------------------
// Join the swarm
// All callbacks must be defined before calling SWARM.connect for it to work.
//-----------------------------------------------------------------------------------------------------------------------------------------
SWARM.connect({ apikey: myApiKey
, swarms: mySwarm
, resource: myResource
, onmessage: updateGrid
, onpresence: updateResources
, onconnect: connectHandler
, onerror: errorHandler
});