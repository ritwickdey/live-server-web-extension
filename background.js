; (function () {
    const SETUP_STRING = 'live-reload-extension-setup';

    function sendMsgToAllContainPage(status, val) {
        chrome.tabs.query({}, tabs => {
            tabs.forEach(tab => {
                chrome.tabs.sendMessage(tab.id, {
                    status: status,
                    value: val
                });
            });
        });
    }

    chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
        if (msg && msg.status && msg.status === 'set-checkbox-status') {
            localStorage.setItem(SETUP_STRING, msg.value);
            sendMsgToAllContainPage('checkbox-status-updated', msg.value)
        }
        else if (msg && msg.status && msg.status === 'get-checkbox-status') {
            const val = localStorage.getItem(SETUP_STRING) === 'true';
            sendResponse({
                value: val
            });
        }
    });

})();