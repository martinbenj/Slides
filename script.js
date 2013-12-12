// Listen for space bar event and show more content by sliding the window down a certain amount

// Down arrow key to show more content

function onPlayerReady(event) {
  event.target.playVideo();
}

var play = false;

window.onload = function(){

	// document.getElementsByTagName('iframe')[0].play();

	// Prevent keydown of spacebar scrolling the page
	document.body.onkeydown = function(e) { 

		if (play === true) {
			document.getElementsByTagName('audio')[0].pause();
			play = false;
		}

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
			
			window.scrollTo(0, document.body.scrollTop + 722);

			debugger;
			var page = document.getElementsByClassName('page-number')[0].innerHTML;
			var pageNumber = +page[0];
			document.getElementsByClassName('page-number')[0].innerHTML = Math.min(pageNumber + 1, 5) + '/5';
		}
	}
}

window.onscroll = function(){

	var pageNumber = document.getElementsByClassName('page-number')[0];
	var scrollPos = document.body.scrollTop;

	var page = Math.max(Math.ceil(document.body.scrollTop / 720), 1);
	pageNumber.innerHTML = page + '/5';



	if (+pageNumber.innerHTML[0] === 5 && !play){
		console.log();
		document.getElementsByTagName('audio')[0].currentTime = 62;
		document.getElementsByTagName('audio')[0].volume = 0;

		var interval = setInterval(function(){
			document.getElementsByTagName('audio')[0].volume = document.getElementsByTagName('audio')[0].volume + 0.05;
		}, 50);

		setTimeout(function(){clearInterval(interval)}, 1000);

		document.getElementsByTagName('audio')[0].play();

		play = true;

	}

};