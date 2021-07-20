; (function () {

    'use strict';

    const protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
    let address = protocol + window.location.host + window.location.pathname + '/ws';
    let socket;
    let isActive = false;

    const init = (data) => {
        if (!data.proxySetup) {
            //Correction
            if (data.liveServerUrl.indexOf('http') !== 0)
                data.liveServerUrl = 'http' + data.liveServerUrl;
            if (data.actualUrl.indexOf('http') !== 0)
                data.actualUrl = 'http' + data.actualUrl;
            if (!data.actualUrl.endsWith('/'))
                data.actualUrl = data.actualUrl + '/';

            address = data.liveServerUrl.replace('http', 'ws') + '/ws';
        }
        socket = new WebSocket(address);
        socket.onmessage = (msg) => {
            socketMessageHandler(msg)
        };
    }

    const socketMessageHandler = (msg) => {
        if (msg.data == 'reload') reloadWindow();
        else if (msg.data == 'refreshcss') refreshCSS();
        logMsgForASingleTime();
    }

    const reloadWindow = () => {
        window.location.reload();
    }

    const refreshCSS = () => {
        const cacheTime = new Date().getTime();
        const Stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
        const Parent = document.querySelector('head');
        Stylesheets.forEach(element => {
            let url = new URL(element.href);
            url.searchParams.set('cacheOverride', cacheTime);
            element.href = url;
            let TempElement = element;
            Parent.removeChild(element);
            Parent.appendChild(TempElement);
        });
    }

    const logMsgForASingleTime = () => {
        const key = 'oneTimeLog-live-server-web-extesion';
        if (!sessionStorage.getItem(key)) {
            console.log("Live reload Actived - Live Server Web Extension");
            sessionStorage.setItem(key, 1);
        }
    }

    chrome.runtime.onMessage.addListener((msg) => {
        if (typeof msg !== 'object') return;
        if (msg.req === 'live-server-config-updated') {
            isActive = msg.data.isEnable;
            if (isActive && !socket) {
                init(msg.data);
            }
        }
    });

    chrome.runtime.sendMessage({
        req: 'get-live-server-config'
    }, (data) => {
        isActive = data.isEnable;
        if (isActive && !socket) {
            init(data);
        }

    });

})();