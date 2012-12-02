var theButton;
window.addEventListener("load", function(){
    var UIItemProperties = {
      disabled: false,
      title: "QR Box",
      icon: "images/icon.png",
      onclick: function() {
		var w = opera.extension.tabs.getFocused();
		if (w) {
			widget.preferences.URL=w.url;
		} else {
			widget.preferences.URL=false;
		}

		theButton.popup.href="mini.html";
      },
      
      popup: {
		href: "mini.html",
        width: "251px",
        height: "251px"
      },
    }
	theButton = opera.contexts.toolbar.createItem( UIItemProperties );
	opera.contexts.toolbar.addItem( theButton );
}, false);


function onMessage(message){
		if(message.data.action=="requestUrl"){
			// If the URI matches that of Google Maps get the real address.
			if(isMaps(widget.preferences.URL)){
				opera.extension.broadcastMessage({
					action: "getUrl"
				});
			}
			else{		
				opera.extension.broadcastMessage({
					action: "showUrl",
					url: widget.preferences.URL
				});
			}
		}
		else if(message.data.action=="returnUrl"){
			opera.extension.broadcastMessage({
				action: "showUrl",
				url: message.data.url
			});
		}
}

opera.extension.addEventListener( 'message' , onMessage, false );
function isMaps(url){
		return url.match("http://maps\\.google\\.[a-z]{2,3}(\\.[a-z]{2})?[/?].*") ||	url.match("http://www\\.google\\.[a-z]{2,3}(\\.[a-z]{2})?/maps.*");
}
