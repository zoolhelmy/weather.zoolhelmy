$(document).ready(function () {
	setBanner();
	getGitHub();
	getTimestamp();
});

function setBanner() {
	var images = [
		{src: 'img/1.jpg', href: '#link1'},
		{src: 'img/2.jpg', href: '#link2'},
		{src: 'img/3.jpg', href: '#link3'},
		{src: 'img/4.jpg', href: '#link4'},
		{src: 'img/5.jpg', href: '#link5'},
		{src: 'img/6.jpg', href: '#link6'},
		{src: 'img/7.jpg', href: '#link7'},
		{src: 'img/8.jpg', href: '#link8'},
		{src: 'img/9.jpg', href: '#link9'}
	];
	var random_image1 = images[Math.floor(Math.random() * images.length)];
	var imgsrc1 = "url(" + random_image1.src + ")";
	$(function(){ $('#background-banner1').css('background-image', imgsrc1); });
	
	var random_image2 = images[Math.floor(Math.random() * images.length)];
	var imgsrc2 = "url(" + random_image2.src + ")";
	$(function(){ $('#background-banner2').css('background-image', imgsrc2); });			
}

function getTimestamp() {
	var url = 'https://api.github.com/repos/zoolhelmy/ESP8266-Weather-Station/commits?path=data/temperature.txt&page=1&per_page=1';
	
	$.getJSON(url, function(data) {
		var now = data[0].commit.committer.date;	
		var todayDate = dateFormat(now, "dddd, dS mmm yyyy, h:MM TT");
		$(function(){ $("#weather-timestamp").text(todayDate); });
	});	
}

function getGitHub() { 
	var url_temperature = 'https://raw.githubusercontent.com/zoolhelmy/ESP8266-Weather-Station/master/data/temperature.txt';
	var url_temperature2 = 'https://raw.githubusercontent.com/zoolhelmy/ESP8266-Weather-Station/master/data/temperature2.txt';
	var url_feelslike = 'https://raw.githubusercontent.com/zoolhelmy/ESP8266-Weather-Station/master/data/feelslike.txt';
	var url_humid = 'https://raw.githubusercontent.com/zoolhelmy/ESP8266-Weather-Station/master/data/humid.txt';
	var url_uv = 'https://raw.githubusercontent.com/zoolhelmy/ESP8266-Weather-Station/master/data/uv.txt';
	var url_duv = 'https://raw.githubusercontent.com/zoolhelmy/ESP8266-Weather-Station/master/data/duv.txt';
	var url_press = 'https://raw.githubusercontent.com/zoolhelmy/ESP8266-Weather-Station/master/data/press.txt';
	var url_presssea = 'https://raw.githubusercontent.com/zoolhelmy/ESP8266-Weather-Station/master/data/presssea.txt';
	var url_alt = 'https://raw.githubusercontent.com/zoolhelmy/ESP8266-Weather-Station/master/data/alt.txt';
	var url_altreal = 'https://raw.githubusercontent.com/zoolhelmy/ESP8266-Weather-Station/master/data/altreal.txt';
	
	$.getJSON(url_temperature, function(data) { if (data) { $('#weather-temperature').text($('#weather-temperature').text().replace("0", data)); } });
	$.getJSON(url_temperature2, function(data) { if (data) { $('#weather-temperature2').text($('#weather-temperature2').text().replace("0", data)); } });
	$.getJSON(url_feelslike, function(data) { if (data) { $('#weather-feelslike').text($('#weather-feelslike').text().replace("0", data)); } });
	$.getJSON(url_humid, function(data) { if (data) { $('#weather-humid').text($('#weather-humid').text().replace("0", data)); } });
	$.getJSON(url_uv, function(data) { if (data) { $('#weather-uv').text($('#weather-uv').text().replace("0", data)); } });
	$.getJSON(url_duv, function(data) { if (data) { $('#weather-duv').text($('#weather-duv').text().replace("0", data)); } });
	$.getJSON(url_press, function(data) { if (data) { $('#weather-press').text($('#weather-press').text().replace("0", data)); } });
	$.getJSON(url_presssea, function(data) { if (data) { $('#weather-presssea').text($('#weather-presssea').text().replace("0", data)); } });
	$.getJSON(url_alt, function(data) { if (data) { $('#weather-alt').text($('#weather-alt').text().replace("0", data)); } });
	$.getJSON(url_altreal, function(data) { if (data) { $('#weather-altreal').text($('#weather-altreal').text().replace("0", data)); } });			
}

