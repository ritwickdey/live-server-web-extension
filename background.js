; (function () {

    'use strict';

    const SETUP_STRING = 'live-reload-extension-new-setup-v2';

    const sendMsgToAllContainPage = (req, data) => {
        chrome.tabs.query({}, tabs => {
            tabs.forEach(tab => {
                chrome.tabs.sendMessage(tab.id, {
                    req: req,
                    data: data
                });
            });
        });
    }

    const storeConfigToLocalStorage = (data) => {
        localStorage.setItem(SETUP_STRING, JSON.stringify(data || {}));
    }

    const getConfigFromLocalStorage = (data) => {
        const val = localStorage.getItem(SETUP_STRING);
        return JSON.parse(val) || {};
    }

    chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {

        if (typeof msg !== 'object') return;
        if (msg.req === 'set-live-server-config') {
            storeConfigToLocalStorage(msg.data);
            sendMsgToAllContainPage('live-server-config-updated', msg.data);
        }
        else if (msg.req === 'get-live-server-config') {
            const data = getConfigFromLocalStorage();
            sendResponse(data);
        }

    });

})();