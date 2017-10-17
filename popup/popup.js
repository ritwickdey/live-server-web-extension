; (function () {

    const liveReloadCheck = document.getElementById('liveReloadCheck');
    // const SETUP_STRING = 'live-reload-extension-setup';

    // function sendMsg(status, val) {
    //     chrome.tabs.query({}, tabs => {
    //         tabs.forEach(tab => {
    //             chrome.tabs.sendMessage(tab.id, {
    //                 status: status,
    //                 value: val
    //             });
    //         });
    //     });
    // }
    // chrome.runtime.onStartup = () => {
    //     const val = localStorage.getItem(SETUP_STRING) === 'true';
    //     liveReloadCheck.checked = val;
    //     sendMsg('checkbox-status', val);
    // };


    liveReloadCheck.onclick = () => {
        const val = liveReloadCheck.checked;
       // localStorage.setItem(SETUP_STRING, val);
        // sendMsg('checkbox-status', val);
        chrome.runtime.sendMessage({
            status: 'set-checkbox-status',
            value: val
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        chrome.runtime.sendMessage({
            status: 'get-checkbox-status'
        }, (res) => {
            liveReloadCheck.checked = res.value;
        });
    });

})();