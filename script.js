/* Script to automatically fill faculty feedback on amizone.net */

choice = prompt('Enter choice\n\n1. Strongly Agree\n2. Agree\n3. Neutral\n4. Disagree\n5. Strongly Disagree\n') - 1;

for (var i = 1; i <= 5; i++) {
	var j;

	switch(i) {
		case 1: j=5; break;
		case 2: j=8; break;
		case 3: j=7; break;
		case 4: j=5; break;
		case 5: j=5; break;
	}

	for (var k = 2; k <= j; k++) {
		document.getElementById('ctl00_ContentPlaceHolder1_rptFeedback_ctl0' + i + '_dgFeedback_ctl0' + k + '_rblRating_' + choice).checked = 'true';
	}
}

for (var i = 1; i <= 3; i++) {
	document.getElementById('ctl00_ContentPlaceHolder1_rdbQuestion' + i + '_0').checked = 'true';
}

document.getElementById('ctl00_ContentPlaceHolder1_txtComments').value = prompt('Enter comment:\n');
