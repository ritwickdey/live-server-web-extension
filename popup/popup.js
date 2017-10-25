; (function () {

    const liveReloadCheck = document.getElementById('liveReloadCheck');
    const serverSetupDiv = document.getElementById('serverSetup');
    const proxyCheckBox = document.getElementById('proxyCheckBox');


    liveReloadCheck.onclick = () => {
        const val = liveReloadCheck.checked;
        chrome.runtime.sendMessage({
            status: 'set-checkbox-status',
            value: val
        });
    }

    proxyCheckBox.onclick = () => {
        serverSetupDiv.className = proxyCheckBox.checked ? 'show' : 'hide';
    }

    document.addEventListener('DOMContentLoaded', () => {
        chrome.runtime.sendMessage({
            status: 'get-checkbox-status'
        }, (res) => {
            liveReloadCheck.checked = res.value;
            serverSetupDiv.className = res.value ? 'show' : 'hide';
        });
    });

})();