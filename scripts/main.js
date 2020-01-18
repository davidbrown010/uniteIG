updateGrid();
function updateGrid(){
	console.log("gridUpdate");
	setAccountInfo(getAccountInfo());
	for (var i = 1; i < 10; i++){
		setPhoto(i, getSource(i));
	}
	var timeout = 60000;
	setTimeout(function(){updateGrid()},timeout);
}
function setPhoto(num, src){
	document.getElementById("photo"+num).setAttribute('src', src);
	console.log("Photo "+ num+ " updated");
}
function setAccountInfo(info){
	document.getElementById('accountPhoto').setAttribute('src', info[0]);
	document.getElementById('accountName').innerText = info[1];
}
function getSource(num){
	var uri = "sample.jpg";
	return uri;
}
function getAccountInfo(){
	var client_id = "505576513420383";
	var app_secret = "adb4de1680385b6926f0982ed2f285ce";
	var redirect_uri = "https://google.com";
	var scope = "user_profile, user_media";
	fetch("https://api.instagram.com/oath/authorize?client_id="+client_id+"&redirect_uri="+redirect_uri+"&scope="+scope+"&responce_type=code", {

	})
	.then((result) => result.json())
	.then((json) => console.log(json));
	var info = ['sample.jpg','unite__youth'];
	return info;
}