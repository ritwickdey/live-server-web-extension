; (function () {
    
    'use strict';

    const protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
    const address = protocol + window.location.host + window.location.pathname + '/ws';
    let socket;
    let isActive = false;

    function init() {
        socket = new WebSocket(address);
        socket.onmessage = reloadWindow;
    }

    function reloadWindow(msg) {
        if (!isActive) return;
        if (msg.data == 'reload' || msg.data == 'refreshcss')
            window.location.reload();
        console.log("reloaded. - From Extension");
    };


    chrome.runtime.onMessage.addListener((msg) => {
       if(typeof msg !== 'object') return;
        if (msg.req === 'live-server-config-updated') {
            isActive = msg.data.isEnable;
            if (isActive && !socket) {
               init();
            }
        }
    });
    
    chrome.runtime.sendMessage({
        req: 'get-live-server-config'
    }, (data) => {
        isActive = data.isEnable;
        if (isActive && !socket) {
           init();
        }

    });

})();