# Live Server - Web Extension


***[Please give a try. Setup is pretty easy. I need your feedback.]***

A browser extension that helps you to live reload feature for dynamic content (PHP, Node.js, ASP.NET -- Whatever, it doesn't matter). 

This extension is for [`Live Server`](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (VSCode Extension - required v3.0.0+).

*[all through you can use the npm package [live-server](https://www.npmjs.com/package/live-server)]*

## Installs: 
* **Firefox** : https://addons.mozilla.org/en-US/firefox/addon/live-server-web-extension/

* **Chrome** : https://chrome.google.com/webstore/detail/live-server-web-extension/fiegdmejfepffgpnejdinekhfieaogmj/

## Demo: 
It is a simple PHP project.

![](./img/screenshots/live-server-web-extension.gif)

## Setup: 
There are two ways to setup `Live Server Web Extension`. 

>_[Note: live Server will not able to compile you dynamic pages, you've to use the existing server, live server will help you to reload the pages when you made any change on your code, so that you have not to reload manually browser on every changes]_

1.  [Direct Setup](#direct-setup) (Easy One, stright-forword) 
2.  [Proxy Setup](#proxy-setup)
  ----------
  
### Direct Setup

* Install the extension on your browser.

* Install [`VSCode`](https://code.visualstudio.com/download) Editor & [`Live Server`](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) Extension.

* Start `Live Server` (assuming the port of live server is `5500`).

* Now open pop-up menu of `Live Server Web Extension` and check the option `I don't want proxy setup`. [Follow the screenshot](./img/screenshots/live-server-web-extension-easy-setup.png).

* Now at the Actual Server add `http://localhost/php/` (assuming your actual server is `http://localhost/php/`).
* Now at the `Live Server` add `http://localhost:5500/`.

* Now stay on `http://localhost/php/`. On every changes, your page will be refreshed automaticly.

----------

### Proxy Setup

* Install the extension on your browser.
* Install [`VSCode`](https://code.visualstudio.com/download) Editor & [`Live Server`](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) Extension. 
* Confiure Live Server settings (`.vscode/settings.json`) as follows :
 
    ```js
    //.vscode/settings.json

    {
        // Mainly for static files
        "liveServer.settings.useWebExt": true,

        /*
            If you have dynamic pages (PHP), you have to setup proxy - it's pretty easy. 

            In easy word, it means you're shifting your real url (actual PHP url) 
            to another url (which LiveSever will start).
        */
        "liveServer.settings.proxy": {
            "enable": true, //switch on :)
            "baseUri": "/", //from where you want to proxy (live server).  
            "proxyUri": "http://127.0.0.1:80" //the actual server url (NOT live server).
        },
    }

    ```
    * ...And you're done! Just Open Live Server _`(ctrl+shift+p > "Open Live Server")`_ and don't forget to turn on live reload from your browser.
    * Note: You have stay on the new url that will be given by Live Server.


## What is new ?

* #### Verision 1.0.0 (26.10.17)
    * ***[New Feature]*** No need to setup proxy. There is now a way to setup - that is pretty easy & stright-forword.

    * ***[Enhancement]*** Pop-up window is redesigned.

    * ***[Bug Fixes]*** Small bug fixes related to the turn on/off switch.

    * No BETA. General Release.
* #### Version 0.0.1 (22.10.17)
    *  Initial Release under BETA.


## LICENSE
This extension is licensed under the [MIT License](./LICENSE)
