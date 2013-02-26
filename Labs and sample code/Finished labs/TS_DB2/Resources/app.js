// Create our database and its table
var dbconn = Ti.Database.open('homeworkdb');
dbconn.execute('CREATE TABLE IF NOT EXISTS homework (id INTEGER PRIMARY KEY AUTOINCREMENT, subject TEXT, duedate TEXT, assignment TEXT, finished INTEGER);');
dbconn.close();

//function to populate the table
var getAssignments = function() {
	var dbconn = Ti.Database.open('homeworkdb');
	var results = dbconn.execute('SELECT id, subject, duedate, assignment FROM homework WHERE finished <> 1 ORDER BY duedate DESC');
	var data = []; // an empty array
	while(results.isValidRow()) {
		var ddate = new Date(results.fieldByName('duedate'));
		ddate = (ddate.getMonth() + 1) + "/" + ddate.getDate() + "/" + ddate.getFullYear();
		var row = Ti.UI.createTableViewRow({
			id: results.fieldByName('id'),
			color: 'transparent'
		});
		var rowWrapper = Ti.UI.createView({
			layout: 'vertical',
			top: 0, left: 0, right: 0, bottom: 0,
			backgroundColor: 'transparent',
			height: Ti.UI.SIZE
		});
		rowWrapper.add(Ti.UI.createLabel({
			text: results.fieldByName('subject') + ' (Due: ' + ddate + ')',
			color: 'black',
			font: {
				fontSize: 20,
				fontWeight: 'bold'
			},
			left: 10, top: 5, right: 10,
			height: Ti.UI.SIZE
		}));
		rowWrapper.add(Ti.UI.createLabel({
			text: results.fieldByName('assignment') + '\n ',
			color: 'black',
			font: {
				fontSize: 14,
				fontWeight: 'normal'
			},
			left: 10, top: 10, right: 10,
			height: Ti.UI.SIZE
		}));
		row.add(rowWrapper);
		data.push(row);
		results.next();
	}
	results.close();
	dbconn.close();
	
	if(data.length == 0) {
		// no assignments
		data.push({
			title: 'No assignments!',
			color: 'black'
		});
	}
	return data;	
};


// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Assignments',
    backgroundColor:'#fff',
    navBarHidden: false,
    barColor: '#2B6182'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Due',
    window:win1
});

// define our table
var table = Ti.UI.createTableView({
	data: getAssignments(),
});
// set a click event listener on the table
table.addEventListener('click', function(e){
	if(e.rowData.id) {
		var done = Ti.UI.createButton({
			title: 'Done!',
			right: 5,
			width: 60,
			top: 5
		});
		done.addEventListener('click', function() {
			var dbconn = Ti.Database.open('homeworkdb');
			// update the database, marking the record as finished
			dbconn.execute('UPDATE homework SET finished = 1 WHERE id = ?', e.rowData.id);
			// reload the table's data
			table.data = getAssignments();
			dbconn.close();
		});
		e.row.add(done);
		var notyet = Ti.UI.createButton({
			title: 'Not yet',
			right: 5,
			width: 60,
			top: 50
		});
		notyet.addEventListener('click', function() {
			// we'll just reload the table's data to clear out the buttons
			table.data = getAssignments();
		});
		e.row.add(notyet);
	}
})
win1.add(table);

// we'll add a focus event listener on the tab so it reloads the table's data
tab1.addEventListener('focus', function(){
	table.data = getAssignments();
});


//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
    title:'Add',
    backgroundColor:'#fff',
    navBarHidden: false,
    barColor: '#2B6182'
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Add',
    window:win2
});

var wrapper = Ti.UI.createView({
    layout: 'vertical',
    top: 0, left:0, right: 0, bottom: 0,
    backgroundColor: 'transparent'
});
win2.add(wrapper);

var label = Titanium.UI.createLabel({
	color:'black',
	text:'Add an Assignment',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	width:Ti.UI.FILL,
	top: 10, left: 10
});
wrapper.add(label);

var subject = Ti.UI.createTextField({
	hintText: 'Subject',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	width:Ti.UI.FILL,
	height: Ti.UI.SIZE,
	top: 10, left: 10, right: 10
});
wrapper.add(subject);

var duedate = Ti.UI.createTextField({
	hintText: 'Due Date',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	height: 30,
	top: 10, left: 10, right: 10
});
duedate.addEventListener('focus', function() {
	subject.blur();
	duedate.blur();
	datedialog.animate({
		left: 0,
		duration: 250
	});
})
wrapper.add(duedate);

// our date "dialog box"
var deviceWidth = Ti.Platform.displayCaps.platformWidth;
var actualduedate = new Date(); // a variable to store the actual due date
var datedialog = Ti.UI.createView({
    top: 0, bottom: 0,
    width: deviceWidth,
    left: -deviceWidth,
    backgroundColor: 'rgba(0,0,0,0.8)'	
});

var picker = Ti.UI.createPicker({
  type:Ti.UI.PICKER_TYPE_DATE,
  value:new Date(),
  top:80, left: 10
});
picker.addEventListener('change', function(e) {
	actualduedate = new Date(picker.value);
})
datedialog.add(picker);

var close = Ti.UI.createButton({
	title: 'Close',
	bottom: 20,
	width: Ti.UI.SIZE
});
close.addEventListener('click', function(){
	duedate.value = (actualduedate.getMonth() + 1) + "/" + actualduedate.getDate() + "/" + actualduedate.getFullYear();
	datedialog.animate({
		left: -deviceWidth,
		duration: 250
	});
})
datedialog.add(close);
win2.add(datedialog);

var assignment = Ti.UI.createTextArea({
	value: 'Assignment',
	borderWidth: 2,
	borderColor: '#bbb',
	borderRadius: 5,
	width:Ti.UI.FILL,
	height: 120,
	top: 10, left: 10, right: 10
});
assignment.addEventListener('focus', function(e) {
	if(e.value == 'Assignment') {
		assignment.value = '';
	}
});
assignment.addEventListener('blur', function(e) {
	if(e.value == '') {
		assignment.value = 'Assignment';
	}
});

wrapper.add(assignment);

var submit = Ti.UI.createButton({
	title: 'Add Assignment',
	width:Ti.UI.SIZE,
	top: 10
});

submit.addEventListener('click', function() {
	var dbconn = Ti.Database.open('homeworkdb');
	var result = dbconn.execute('INSERT INTO homework (subject, duedate, assignment, finished) VALUES (?, ?, ?, ?)', subject.value, actualduedate.toString(), assignment.value, 0);
	dbconn.close();
	tabGroup.setActiveTab(0);
});
wrapper.add(submit);

tab2.addEventListener('focus', function() {
	subject.value = '';
	duedate.value = '';
	assignment.value = 'Assignment';
})
//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  


// open tab group
tabGroup.open();
