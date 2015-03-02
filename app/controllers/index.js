//create the widget
var toggleBtnWidget = Alloy.createWidget("buttonToggle");

//get the main view from the widget
$.mainWindow.add(toggleBtnWidget.getView());

//open the window
$.mainWindow.open();
