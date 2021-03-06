require('nw.gui').Window.get().showDevTools(); //show console at start
// require('nw.gui').Window.get().maximize(); //maximize windows on start

var credentials = require('./private.js'); //config include domain user and pass

var ActiveDirectory = require('activedirectory');
var ad = new ActiveDirectory(credentials.dn, credentials.dc, credentials.user, credentials.pass, {attributes: {user: [ 'cn', 'telephonenumber', 'mail', 'department', 'mobile']}});

var groupName = 'Employees';  // that how i call group with all real persons
ad.getUsersForGroup(groupName, function(err, users) {
  if (err) {
    console.log('ERROR: ' +JSON.stringify(err));
    return;
  }

  if (! users) console.log('Group: ' + groupName + ' not found.');
  else {
  	var localusers = localStorage.users;
  	var ldapusers = JSON.stringify(users);
    if (localusers != ldapusers) {
    	localStorage.users = JSON.stringify(users);
    	console.info('users changed');
    } else {console.log('users didn\'t changed')};
    users2table(JSON.parse(localStorage.users));
  }
});

if (localStorage.users) users2table(JSON.parse(localStorage.users));
function users2table (users) {
	tablehtml = '';
	for (i=0; i<users.length;i++) {
		var user = users[i];
		// console.log(user);
		tablehtml+='<tr>';
		tablehtml+=	'<td>'+user.cn+'</td>'
		tablehtml+=	'<td>'+((user.telephoneNumber)?user.telephoneNumber:'')+((user.mobile)?('<br/>'+user.mobile):'')+'</td>'
		tablehtml+=	'<td>'+((user.mail)?'<a href="mailto:'+user.mail+'">'+user.mail+'</a>':'')+'</td>'
		tablehtml+=	'<td>'+((user.department)?user.department:'')+'</td>'
		tablehtml+='</tr>'
	}
	// console.log(tablehtml);
	$('#table tbody').html(tablehtml);
	sorter.init();
	$('#query').focus();
}
var prevquery='';