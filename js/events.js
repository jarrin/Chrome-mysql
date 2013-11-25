var events =
{
	bindToolbars: function(elements)
	{
		elements.on('itemclick', function (event)
		{
		    // get the clicked LI element.
		    switch($(event.args).data("action"))
		    {
		    	case "open-servers":
		    		uiHelper.openServerWindow();
		    	break;
		    }
		});
	},
	bindServerWindowList: function(elelement)
	{
		elelement.on('select', function (e)
		{
			servers.switchServerPanel(e.args.item.value);

		});
	}
}