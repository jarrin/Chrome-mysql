var database =
{
	obj: null,
	dbName: "chrome-mysql",

	init: function()
	{

		$.indexedDB(database.dbName, 
		{ 
		    "version" : 2,  // Integer version that the DB should be opened with
		    "schema" : 
		    {
		        "2" : function(versionTransaction)
		        {
		    		versionTransaction.createObjectStore("servers", 
		    		{
		    			"keyPath": "id"
            		});
                      
		    	}   
		    }
		}).done(function()
		{
			MODULES_READY.database = true;
			//Load database related function
			servers.dbReady();
		}).fail(errorHandler.dbError);
	}
}