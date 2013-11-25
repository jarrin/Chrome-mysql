var uiHelper =
{
	serverWindow: null,
	serverWindowSplitter: null,
	serverWindowList: null,

	init: function()
	{

		//MAIN VIEW SPLITTERS
		$('#main-horizontal-splitter').jqxSplitter(
		{
			width: "100%", 
			height: "100%", 
			orientation: "horizontal",
			panels:
			[{ 
				size: "90%",
				min: 300
			}, 
			{
			 	min: 50,
			 	size: "10%",
			 	max: 200
			}],
			theme: "energyblue"
		});
		$('#main-vertical-splitter').jqxSplitter(
		{
			width: "100%", 
			height: "100%", 
			orientation: "vertical",
			panels:
			[{ 
				size: "10%", 
				min: 150 
			}, 
			{
			 	min: 200, 
			 	size: "90%"
			}],
			theme: "energyblue"

		});


		//SERVERS WINDOW
		this.serverWindow = $("#servers-window").jqxWindow({

			title: "Edit servers", 
			theme: "energyblue",
			autoOpen: true,
			isModal: true,
			width: "600px",
			height: "60%",
			position: { x: 20, y: 20 },
			modalOpacity: .7


		});
		this.serverWindow.on('resized', uiHelper.serverWindowResize);


		//TOOLBARS
		var toolbars = $("#toolbar, #servers-window-toolbar")
		this.toolbarIcons(toolbars);
		$("#toolbar").jqxMenu({ width: "100%", height: 20, theme: "energyblue"});
		$("#servers-window-toolbar").jqxMenu({ width: "100%", height: 30, theme: "energyblue"});
		events.bindToolbars(toolbars);

		//SERVER WINDOW SPLITTER
		this.serverWindowSplitter = $("#server-window-splitter").jqxSplitter(
		{
			width: "100%", 
			height: $("#servers-window .jqx-window-content").innerHeight() - $("#servers-window-toolbar").outerHeight(), 
			orientation: "vertical",
			panels:
			[{ 
				size: "20%", 
				min: 100 
			}, 
			{
			 	min: 200, 
			 	size: "80%"
			}],
			theme: "energyblue"

		});
		//SERVER WINDOW: SERVERS LIST
		this.serverWindowList = $("#server-window-list").jqxListBox(
		 { 
		 	width: "100%", 
		 	height: "100%", 
		 	theme: "energyblue" 
		 });
		events.bindServerWindowList(this.serverWindowList);
		//SERVER WINDOW: FORM
		$('#server-edit-form').jqxValidator({
             rules: [
                    { input: '#server-window-name', message: 'Name is required! (2-12 chars)', action: 'keyup, blur', rule: 'length=2,12' },
                    {  input: '#server-window-host', message: 'Host is invalid', action: 'keyup, blur', rule: function(input){
                    	var val = $(input).val();
                    	if (/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^(?:(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){6})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:::(?:(?:(?:[0-9a-fA-F]{1,4})):){5})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){4})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,1}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){3})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,2}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:(?:[0-9a-fA-F]{1,4})):){2})(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,3}(?:(?:[0-9a-fA-F]{1,4})))?::(?:(?:[0-9a-fA-F]{1,4})):)(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,4}(?:(?:[0-9a-fA-F]{1,4})))?::)(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9]))\.){3}(?:(?:25[0-5]|(?:[1-9]|1[0-9]|2[0-4])?[0-9])))))))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,5}(?:(?:[0-9a-fA-F]{1,4})))?::)(?:(?:[0-9a-fA-F]{1,4})))|(?:(?:(?:(?:(?:(?:[0-9a-fA-F]{1,4})):){0,6}(?:(?:[0-9a-fA-F]{1,4})))?::))))$/.test(val))
						{
							return true;
						}
                    	return false;
                    }},
                    { input: '#server-window-port', message: 'Port is required (1-65535)', action: 'keyup, blur', rule: function(input){
                    	var val = parseInt($(input).val());
                    	if(isNaN(val)) return false;
                    	if(val < 1 || val > 65535) return false;
                    	return true;
                    }}
                   	], theme: "energyblue"
            });		
		//Window resize
		$(window).resize(function()
		{
			uiHelper.wResize();
		});
		MODULES_READY.uiHelper = true;
	},
	allReady: function()
	{
		console.log("Everything ready");
	},
	serverWindowResize: function()
	{
		$("#server-window-splitter").height($("#servers-window .jqx-window-content").innerHeight() - $("#servers-window-toolbar").outerHeight() );
	},
	openServerWindow: function()
	{
		this.serverWindow.jqxWindow('open');
		this.serverWindowResize();
	},
	wResize: function()
	{
		var wHeight = $(window).height();
		var tHeight = $("#toolbar").height();

		$("#panel-main").height(wHeight - tHeight);
	},
	toolbarIcons: function(toolbars)
	{
		$(toolbars).find("li[data-icon]").each(function(i, el)
		{
			var icon = "css/images/icons/" + $(el).data("icon") + ".png";
			$(el).prepend($("<img>").attr("src", icon).addClass("toolbar-icon"));
		});
	}
}