// == Minify ==
// @include http://*/*
// @include https://*/*

function onMessage(message){
	if(message.data.action=="getUrl"){
		if(isMaps(window.location.href)){
			var link = document.getElementById('link');
			if (link && link.href){
				opera.extension.postMessage({
					action: "returnUrl",
					url: link.href
				});
			}
		}
	}
}

opera.extension.addEventListener( 'message' , onMessage, false );

function isMaps(url){
		return url.match("http://maps\\.google\\.[a-z]{2,3}(\\.[a-z]{2})?[/?].*") ||	url.match("http://www\\.google\\.[a-z]{2,3}(\\.[a-z]{2})?/maps.*");
}
