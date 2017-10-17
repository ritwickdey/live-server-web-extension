; (function () {
    
    const protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
    const address = protocol + window.location.host + window.location.pathname + '/ws';
    const socket = new WebSocket(address);
    let isActive = false;

    const reloadWindow = function (msg) {
        if (!isActive) return;

        if (msg.data == 'reload' || msg.data == 'refreshcss')
            window.location.reload();
        console.log("reloaded. - From Extension");
    };

    
    chrome.runtime.onMessage.addListener((msg) => {
        if (msg && msg.status && msg.status === 'checkbox-status-updated') {
            isActive = msg.status;
        }
    });
    
    chrome.runtime.sendMessage({
        status: 'get-checkbox-status'
    }, (res) => {
        isActive = res.value;
        socket.onmessage = reloadWindow;
    });
    
})();