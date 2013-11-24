var MODULES_READY = {};

MODULES_READY.DOM = false;
MODULES_READY.database = false;
MODULES_READY.uiHelper = false;
MODULES_READY.servers = false;

//Init functions
database.init();

$(function() {
	MODULES_READY.DOM = true;
	uiHelper.init();
});



//On everything ready
var mod_ready_int = setInterval(function()
{

	var ready = true;

	for (var key in MODULES_READY) 
	{
		if(!MODULES_READY[key]) ready = false;
	}

	if(ready)
	{
		uiHelper.allReady();
		clearInterval(mod_ready_int);
	}

}, 50);

