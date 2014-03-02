
var rnc = rnc || {};

// wait for everything to be ready then run the demo code
rnc.resolver.initialize(function () {

  console.log("starting our app");

  if (typeof(StatusBar) !== "undefined") {
    console.log("Setting StatusBar");
    StatusBar.overlaysWebView(false);
    StatusBar.backgroundColorByHexString('#000000');
  } else {
    console.log("NO StatusBar");
  }
  rnc.calculator();
});