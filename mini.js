opera.isReady(function(){
var url = window["url"];
function findURL() {
  if (url != "false") {
    if (widget.preferences.bitName && widget.preferences.bitKey) {
      qr_droidC = document.createElement('SCRIPT');
      qr_droidC.type = 'text/javascript';
      qr_droidC.src = 'http://api.bit.ly/shorten?version=2.0.1&login=' + widget.preferences.bitName + '&apiKey=' + widget.preferences.bitKey + '&callback=shortUrl&longUrl=' + encodeURIComponent(url);
      document.getElementById('minimessage').appendChild(qr_droidC);
    } else {
      document.getElementById('qrImg').src = showQRCode(url).src;
    }
  } else {
    document.getElementById('minimessage').innerHTML = "Please try to load a new page in a new tab and try again.";
  }
}
var findURL = window["findURL"] = findURL;
function shortUrl(Result) {
  var errcode = Result.errorCode;
  if (errcode == 0) {
    debugger;
    document.getElementById('qrImg').src = showQRCode(decodeURIComponent(Result.results[url].shortUrl)).src;
  } else if (errcode == 203) {
    document.getElementById('minimessage').innerHTML = "<div style='margin:10px;font-family:arial,sans-serif;'>Error:<br/>Incorrect Bit.ly Username and/or API key.</div>";
  } else {
    document.getElementById('minimessage').innerHTML = "<div style='margin:10px;font-family:arial,sans-serif;'>Error:<br/>Error Code - " + errcode + "</div>";
  }
}
var shortUrl = window["shortUrl"] = shortUrl;
window.onload = function() {
  opera.extension.postMessage({
    action: "requestUrl"
  });
};
function onMessage(message) {
  if (message.data.action == "showUrl") {
    url = message.data.url;
    findURL();
  }
}
var onMessage = window["onMessage"] = onMessage;
opera.extension.addEventListener('message', onMessage, false);
});
