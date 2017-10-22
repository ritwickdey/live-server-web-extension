# Live Server - Web Extension - BETA

***[STILL IN UNDER DEVELOPEMENT]***

`Live Server - Web Extension` is a browser extension that helps you to live reload feature for dynamic content (PHP, Node.js, ASPNET -- Whatever, it doesn't matter). 
This extension is for [`Live Server`](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (VSCode Extension - required v3.0.0+). 

## Install Link : 
* Firefox : https://addons.mozilla.org/en-US/firefox/addon/live-server-web-extension/

* Chrome : _NOT published yet. yoy can install it throgh development mode_  

## Demo: 
It is a simple PHP project.

![](./img/screenshots/live-server-web-extension.gif)

## Setup: 
* Install the extension on your browser.
* Install [`VSCode`](https://code.visualstudio.com/download) Editor & [`Live Server`](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) Extension. 
* Confiure Live Server settings (`.vscode/settings.json`) as follows :
    ```js
    //.vscode/settings.json
    {
        "liveServer.settings.useWebExt": true,

        //If you have dynamic pages (PHP), you have to setup proxy - it's pretty easy. 

        // In easy word, it means you're shifting your real url (actual PHP url) to another url (which LiveSever will start).
        "liveServer.settings.proxy": {
            "enable": false,
            "baseUri": "/", //from where you want to proxy.  
            "proxyUri": "http://127.0.0.1:80" //the actual url.
        },
    }

    ```
    * ...And you're done! Just Open Live Server _`(ctrl+shift+p > "Open Live Server")`_ and don't forget to turn on live reload from your browser.


## What is new ?

* #### Version 0.0.1 (22.10.17)
    *  Initial Release under BETA.


## LICENSE
This extension is licensed under the [MIT License](./LICENSE)





