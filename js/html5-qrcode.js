opera.isReady(function(){
function showQRCode(text) {
  var dotsize = 5;
  var padding = 10;
  var black = "rgb(0,0,0)";
  var white = "rgb(255,255,255)";
  var QRCodeVersion = getQuality(text.length);
  var canvas = document.createElement('canvas');
  var qrCanvasContext = canvas.getContext('2d');
  try {
    var qr = new QRCode(QRCodeVersion, QRErrorCorrectLevel.M);
    qr.addData(text);
    qr.make();
  } catch (err) {
    var errorChild = document.createElement("p");
    var errorMSG = document.createTextNode("QR Code FAIL! " + err);
    errorChild.appendChild(errorMSG);
    return errorChild;
  }
  var qrsize = qr.getModuleCount();
  canvas.setAttribute('height', (qrsize * dotsize) + padding);
  canvas.setAttribute('width', (qrsize * dotsize) + padding);
  var shiftForPadding = padding / 2;
  if (canvas.getContext) {
    for (var r = 0; r < qrsize; r++) {
      for (var c = 0; c < qrsize; c++) {
        if (qr.isDark(r, c)) qrCanvasContext.fillStyle = black; else qrCanvasContext.fillStyle = white;
        qrCanvasContext.fillRect((c * dotsize) + shiftForPadding, (r * dotsize) + shiftForPadding, dotsize, dotsize);
      }
    }
  }
  var imgElement = document.createElement("img");
  imgElement.src = canvas.toDataURL("image/png");
  return imgElement;
}
var showQRCode = window["showQRCode"] = showQRCode;
getQuality = function(length) {
  if (length <= 14) {
    return 1;
  } else if (length <= 26) {
    return 2;
  } else if (length <= 42) {
    return 3;
  } else if (length <= 62) {
    return 4;
  } else if (length <= 84) {
    return 5;
  } else if (length <= 106) {
    return 6;
  } else if (length <= 122) {
    return 7;
  } else if (length <= 152) {
    return 8;
  } else if (length <= 180) {
    return 9;
  } else if (length <= 212) {
    return 10;
  } else if (length <= 251) {
    return 11;
  } else if (length <= 287) {
    return 12;
  } else if (length <= 331) {
    return 13;
  } else if (length <= 362) {
    return 14;
  } else if (length <= 412) {
    return 15;
  } else if (length <= 450) {
    return 16;
  } else if (length <= 504) {
    return 17;
  } else if (length <= 560) {
    return 18;
  } else if (length <= 624) {
    return 19;
  } else if (length <= 666) {
    return 20;
  } else if (length <= 711) {
    return 21;
  } else if (length <= 779) {
    return 22;
  } else if (length <= 857) {
    return 23;
  } else if (length <= 911) {
    return 24;
  } else if (length <= 997) {
    return 25;
  } else if (length <= 1059) {
    return 26;
  } else if (length <= 1125) {
    return 27;
  } else if (length <= 1190) {
    return 28;
  } else if (length <= 1264) {
    return 29;
  } else if (length <= 1368) {
    return 30;
  } else if (length <= 1452) {
    return 31;
  } else if (length <= 1538) {
    return 32;
  } else if (length <= 1620) {
    return 33;
  } else if (length <= 1722) {
    return 34;
  } else if (length <= 1808) {
    return 35;
  } else if (length <= 1911) {
    return 36;
  } else if (length <= 1989) {
    return 37;
  } else if (length <= 2099) {
    return 38;
  } else if (length <= 2213) {
    return 39;
  } else if (length <= 2331) {
    return 40;
  }
};
});
