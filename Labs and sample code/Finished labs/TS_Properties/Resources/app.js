// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff',
    layout: 'vertical'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:win1
});

var me = Ti.App.Properties.getObject('me', {});
var name = Ti.UI.createTextField({
	hintText: 'What is your name?',
	value: me.name,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	top: 50
});
win1.add(name);

var fave = Ti.UI.createTextField({
	hintText: 'What is your favorite color?',
	value: me.fave,
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	top: 20
});
win1.add(fave);

var submit = Ti.UI.createButton({
	title: 'Save',
	top: 20
});
submit.addEventListener('click', function() {
	name.blur();
	fave.blur();
	Ti.App.Properties.setObject('me', {name: name.value, fave: fave.value});
});
win1.add(submit);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Tab 2',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window 2',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);



//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
