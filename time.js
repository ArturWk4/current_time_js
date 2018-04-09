function printTime() {
	let currentDate = new Date();
	let hours = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();
		if(seconds < 10) {
			seconds = "0" + seconds;
		}
		if(minutes < 10) {
			minutes = "0" + minutes;
		}
		if(hours < 10) {
			hours = "0" + hours;
		}
		document.body.innerHTML = hours + ":" + minutes + ":" + seconds;
}
setInterval(printTime, 1000);