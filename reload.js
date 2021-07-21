; (function () {

    'use strict';
    const currentUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
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
            socketMessageHandler(msg, data)
        };
    }

    const socketMessageHandler = (msg, data) => {
        if (!isActive) return;
        if (msg.data == 'reload' && checkActive(data)) {
            reloadWindow();
        } else if (msg.data == 'refreshcss' && checkActive(data)) {
            refreshCSS();
        }
        logMsgForASingleTime();
    }

    const checkActive = (data) => {
        if (data.proxySetup === true || (data.proxySetup === false && currentUrl.startsWith(data.actualUrl))) return true;
        else return false;
    }

    const reloadWindow = () => {
        window.location.reload();
    }

    const refreshCSS = () => {
        const cachetime = new Date().getTime();
        const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
        const parent = document.querySelector('head');
        stylesheets.forEach(element => {
            let url = new URL(element.href);
            url.searchParams.set('cacheOverride', cachetime);
            element.href = url;
            let tempElement = element;
            parent.removeChild(element);
            parent.appendChild(tempElement);
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