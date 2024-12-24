; (function () {

    'use strict';

    const SETUP_STRING = 'live-reload-extension-new-setup-v2';

    function sendMsgToAllContainPage(req, data) {
        chrome.tabs.query({}, tabs => {
            tabs.forEach(tab => {
                chrome.tabs.sendMessage(tab.id, {
                    req: req,
                    data: data
                });
            });
        });
    }

    function storeConfigToLocalStorage(data) {
        chrome.storage.local.set({ [SETUP_STRING]: data || {} });
    }
    
    function getConfigFromLocalStorage() {
        return new Promise((resolve) => {
            chrome.storage.local.get([SETUP_STRING], (result) => {
                resolve(result[SETUP_STRING] || {});
            });
        });
    }

    chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {

        if (typeof msg !== 'object') return;
        if (msg.req === 'set-live-server-config') {
            storeConfigToLocalStorage(msg.data);
            sendMsgToAllContainPage('live-server-config-updated', msg.data);
        }
        else if (msg.req === 'get-live-server-config') {
            const data = getConfigFromLocalStorage();
            if(data){
                sendResponse(data);
            }
        }

    });

})();