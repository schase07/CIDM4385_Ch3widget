$.container.addEventListener('click', function(_event)
	{
		//hide the clicked item, show the unclicked one
		toggleButtonByIdClicked(_event.source.id);		
	}
);

//_buttonId name of the id clicked
function toggleButtonByIdClicked(_buttonId)
{
	if(_buttonId === "on")
	{
		$.on.hide();
		$.off.show();
	}else if(_buttonId === "off")
	{
		$.on.show();
		$.off.hide();
	}
}

