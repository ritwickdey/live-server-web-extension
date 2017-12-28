# About

### That's why I built this extension.
The reason I built this browser add-on is to delight the experience of server-side programming...lorem ipsum dolor

<br>

![Illustration GIF-image](./../img/screenshots/live-server-web-extension.gif)

<br><br>

# Code Insight
```js
master/
┃
┣━━img/          // Folder with images
┃
┣━━popup/        // Folder for the popup page
┃
┣━━manifest.json // Initiate the extension to app store
┣━━background.js // Background script
┗━━reload.js     // Reload functionality
```
<br>

#### manifest.json
The manifest.json file is a JSON-formatted file, and is the only file that every extension using WebExtension APIs must contain.

Using manifest.json, you specify basic metadata about your extension such as the name and version, and can also specify aspects of your extension's functionality, such as background scripts, content scripts, and browser actions.
[Read more...](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json)

<br>

#### background.js
Background scripts are the place to put code that needs to maintain long-term state, or perform long-term operations, independently of the lifetime of any particular web pages or browser windows.

Background scripts are loaded as soon as the extension is loaded and stay loaded until the extension is disabled or uninstalled. You can use any of the WebExtension APIs in the script, as long as you have requested the necessary permissions.
[Read more...](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/manifest.json/background)

<br>

#### reload.js
info is needed...  
*[all through you can use the npm package [live-server](https://www.npmjs.com/package/live-server)]*
