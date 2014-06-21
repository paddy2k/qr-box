opera.isReady(function(){
var theButton = window["theButton"];
window.addEventListener("load", function() {
  var UIItemProperties = {
    disabled: false,
    title: "QR Box",
    icon: "images/icon.png",
    popup: {
      href: "mini.html",
      width: "251px",
      height: "251px"
    }
  };
  chrome.browserAction.onClicked.addListener(function(){
    var w = opera.extension.tabs.getFocused();
      if (w) {
        widget.preferences.setItem('URL', w.url);
      } else {
        widget.preferences.setItem('URL', false);
      }
      theButton.popup.href = "mini.html";
  });
  theButton = opera.contexts.toolbar.createItem(UIItemProperties);
  opera.contexts.toolbar.addItem(theButton);
}, false);
function onMessage(message) {
  if (message.data.action == "requestUrl") {
    var url = opera.extension.tabs.getFocused().url;
    if (isMaps(url)) {
      opera.extension.broadcastMessage({
        action: "getUrl"
      });
    } else {
      opera.extension.broadcastMessage({
        action: "showUrl",
        url: url
      });
    }
  } else if (message.data.action == "returnUrl") {
    opera.extension.broadcastMessage({
      action: "showUrl",
      url: message.data.url
    });
  }
}
var onMessage = window["onMessage"] = onMessage;
opera.extension.addEventListener('message', onMessage, false);
function isMaps(url) {
  return url.match("http://maps\\.google\\.[a-z]{2,3}(\\.[a-z]{2})?[/?].*") || url.match("http://www\\.google\\.[a-z]{2,3}(\\.[a-z]{2})?/maps.*");
}
var isMaps = window["isMaps"] = isMaps;
});
