; (function () {


    chrome.runtime.onMessage.addListener((msg) => {
        console.log(msg)
    });



    const protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
    const address = protocol + window.location.host + window.location.pathname + '/ws';
    const socket = new WebSocket(address);
    socket.onmessage = function (msg) {
        if (msg.data == 'reload' || msg.data == 'refreshcss')
            window.location.reload();
        console.log("reloaded. - From Extension");
    };
})();