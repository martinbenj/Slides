// Listen for space bar event and show more content by sliding the window down a certain amount

// Down arrow key to show more content

window.onload = function(){

	// Prevent keydown of spacebar scrolling the page
	document.body.onkeydown = function(e) { 
    return !(e.keyCode === 32);
	};

	document.body.onkeyup = function(e){
		if (e.keyCode === 13) {
			var hidden = document.getElementsByClassName('hidden')[0];
			hidden.setAttribute('class', hidden.getAttribute('class').replace('hidden', 'visible'));
		}

		else if (e.keyCode === 16) {
			var visible = document.getElementsByClassName('visible')[document.getElementsByClassName('visible').length - 1];
			visible.setAttribute('class', visible.getAttribute('class').replace('visible', 'hidden'));
		}
		else if (e.keyCode === 32) {
			
			window.scrollTo(0, document.body.scrollTop + 723);

			debugger;
			var page = document.getElementsByClassName('page-number')[0].innerHTML;
			var pageNumber = +page[0];
			document.getElementsByClassName('page-number')[0].innerHTML = pageNumber + 1 + '/5';

			e.preventDefault();
			e.stopPropagation();
			return false;
		}
	}
}

window.onscroll = function(){

	var pageNumber = document.getElementsByClassName('page-number')[0];
	var scrollPos = document.body.scrollTop;

	var page = Math.max(Math.ceil(document.body.scrollTop / 723), 1);
	pageNumber.innerHTML = page + '/5';

	// switch (true) {
	// 	case (scrollPos <= 723):
	// 		pageNumber.innerHTML = '1/5'
	// 		break;
	// 	case (scrollPos <= 1446):
	// 		pageNumber.innerHTML = '2/5'
	// 		break;
	// 	default:
	// 		break;
	// }

	console.log(document.body.scrollTop);

};