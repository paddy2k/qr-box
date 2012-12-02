var url;
function findURL(){
	if(url!="false"){
		if(widget.preferences.bitName && widget.preferences.bitKey){
			qr_droidC=document.createElement('SCRIPT');
			qr_droidC.type='text/javascript';
			qr_droidC.src='http://api.bit.ly/shorten?version=2.0.1&login='+widget.preferences.bitName+'&apiKey='+widget.preferences.bitKey+'&callback=shortUrl&longUrl='+encodeURIComponent(url);
			document.getElementById('minimessage').appendChild(qr_droidC);
		}
		else{
			document.getElementById('qrImg').src="http://chart.apis.google.com/chart?cht=qr&chs=250x250&chl="+encodeURIComponent(url);
		}
	}
	else{
	document.getElementById('minimessage').innerHTML="Please try to load a new page in a new tab and try again.";
	}
}

function shortUrl(Result){
	
	var errcode = Result.errorCode;
	if(errcode==0){
		document.getElementById('qrImg').src="http://chart.apis.google.com/chart?cht=qr&chs=250x250&chl="+Result.results[url].shortUrl;
	}
	else if(errcode==203){
		document.getElementById('minimessage').innerHTML="<div style='margin:10px;font-family:arial,sans-serif;'>Error:<br/>Incorrect Bit.ly Username and/or API key.</div>";
	}
	else{
		document.getElementById('minimessage').innerHTML="<div style='margin:10px;font-family:arial,sans-serif;'>Error:<br/>Error Code - "+errcode+"</div>";
	}
}

window.onload=function(){
	opera.extension.postMessage({
		action: "requestUrl"
	});
	
}

function onMessage(message){
	if(message.data.action=="showUrl"){
		url=message.data.url;
		findURL();
	}
}

opera.extension.addEventListener( 'message' , onMessage, false );
