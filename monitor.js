var updateChatter, updateList, connectHandler, errorHandler;

//Here, you need to put your participation API key, your swarm ID and your resource ID !
var myApiKey = '9f1902427fb7159757f45ffe5a321746e4e95bcd';
var mySwarm = '03d7320242228512a19d116ffd70e1c344676fbc';
var myResource = '3dc7251e85b3d96fe0f8bfce869a33d962ce3d39';

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
	// Filter out swarm presence messages, which do not contain the 'type' field
	if(presence.type) 
	{
		var who = presence.from.resource;
		var alive = (presence.type === "available");

		//if somebody joins or quits the chat, update the chatters list
		if (alive) 
		{
			$('#resources').append("<li id='" + who + "'>" + who + ' is now conneted.</li>');	
		}
		else 
		{			
			$('#resources').append("<li id='" + who + "'>" + who + ' just left.</li>');
		}
		
		//Get the log and scroll down, so that the last log could be seen
		document.querySelector('#resources').scrollTop = document.querySelector('#resources').scrollHeight;
	}
};


//-----------------------------------------------------------------------------------------------------------------------------------------
//Update the colour of the elements of the grid
//-----------------------------------------------------------------------------------------------------------------------------------------
updateGrid = function(response) 
{
	message = JSON.parse(response).message;
	var who = presence.from.resource;
	var what = message.payload;

	document.querySelector('#first .one').style.backgroundColor = what.message;

};

//-----------------------------------------------------------------------------------------------------------------------------------------
// Join the swarm
// All callbacks must be defined before calling SWARM.connect for it to work.
//-----------------------------------------------------------------------------------------------------------------------------------------
SWARM.connect({ apikey: myApiKey
, swarms: mySwarm
, resource: myResource
, onmessage: updateList
, onpresence: updateResources
, onconnect: connectHandler
, onerror: errorHandler
});