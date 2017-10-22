# Live Server - Web Extension - BETA

***[STILL IN UNDER DEVELOPEMENT]***

***[Please give a try. Setup is pretty easy. I need your feedback.]***

<br>

**Live Server - Web Extension** is a browser extension that helps you to live reload feature for dynamic content (PHP, Node.js, ASP.NET -- Whatever, it doesn't matter). 
This extension is for [`Live Server`](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (VSCode Extension - required v3.0.0+). 


## Installs: 
* **Firefox** : https://addons.mozilla.org/en-US/firefox/addon/live-server-web-extension/

* **Chrome** : _NOT published yet. you can install it through development mode_.

    _(Actually, Google Chrome Add-on Store is paid ($5). If I get a good feedback from you, I'll happy to pay that money otherwise I don't want to waste my pocket-money - I'm a student)_ :smile:

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
        // Mainly for static files
        "liveServer.settings.useWebExt": true,

        /*
            If you have dynamic pages (PHP), you have to setup proxy - it's pretty easy. 

            In easy word, it means you're shifting your real url (actual PHP url) 
            to another url (which LiveSever will start).
        */
        "liveServer.settings.proxy": {
            "enable": true, //switch on :)
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