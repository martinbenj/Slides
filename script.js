// Listen for space bar event and show more content by sliding the window down a certain amount

// Down arrow key to show more content
document.body.onkeyup = function(e){

	if (e.keyCode === 13) {
		var hidden = document.getElementsByClassName('hidden')[0];
		hidden.setAttribute('class', hidden.getAttribute('class').replace('hidden', 'visible'));
	}

	else if (e.keyCode === 16) {
		var visible = document.getElementsByClassName('visible')[document.getElementsByClassName('visible').length - 1];
		visible.setAttribute('class', visible.getAttribute('class').replace('visible', 'hidden'));
	}

	
}

