var servers =
{
	serversString: null,
	serverStore: null,
	serversInDB: 0,

	servers: [],
	init: function()
	{

	},
	dbReady: function(transaction)
	{
		this.serverStore = $.indexedDB(database.dbName).objectStore("servers")
		servers.getAll(function(){ MODULES_READY.servers = true; });

		/*
		$.indexedDB(database.dbName).objectStore("servers");
				var test =
			{
				id: 2,
				name: "Test server",
				host: "rrin.nl",
				port: 3309,
				type: "MySQL"
			}
		console.log(this.serverStore);
		this.serverStore.add(test).done(function()
		{
			console.log(this.serverStore);

		}).fail(function(err, e)
		{
			console.log(err, e);
		});*/
	},
	getAll: function(done)
	{
		this.serverStore.each(function(item)
		{
			servers.serversInDB++;
			servers.serverStore.get(item.key).done(function(result)
			{
				servers.servers[result.id] = result;
				uiHelper.serverWindowList.jqxListBox('addItem', 
				{
					label: result.name,
					value: result.id
				});
				$("#toolbar-servers > ul").append($("<li>").data("value", result.id).html(result.name));
			});

		}).done(function(){


			done();

		}).fail(errorHandler.dbError);
	},
	switchServerPanel: function(id)
	{
		
	}
}
servers.init();