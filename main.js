/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/trunk/apps/app.runtime.html
 * @see http://developer.chrome.com/trunk/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  // Center window on screen.
  var screenWidth = screen.availWidth;
  var screenHeight = screen.availHeight;
  chrome.app.window.create('index.html', {
    id: "helloWorldID",
    bounds: {
      width: 2000,
      height: 2000,
      left: 0,
      top: 0
    }
  });
});
