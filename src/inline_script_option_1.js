opera.isReady(function(){
var bitName = window["bitName"] = document.getElementById('bitName'), bitKey = window["bitKey"] = document.getElementById('bitKey');
bitName.addEventListener('change', function() {
  widget.preferences.setItem('bitName', this.value);
}, false);
bitKey.addEventListener('change', function() {
  widget.preferences.setItem('bitKey', this.value);
}, false);
if (widget.preferences.bitName) {
  bitName.value = widget.preferences.bitName;
}
if (widget.preferences.bitKey) {
  bitKey.value = widget.preferences.bitKey;
}
});
