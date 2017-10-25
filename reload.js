; (function () {



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
        if (msg && msg.status && msg.status === 'checkbox-status-updated') {
            isActive = msg.value;
            if (isActive && !socket) {
               init();
            }
        }
    });

    chrome.runtime.sendMessage({
        status: 'get-checkbox-status'
    }, (res) => {
        isActive = res.value;
        if (isActive && !socket) {
           init();
        }

    });

})();