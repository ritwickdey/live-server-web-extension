; (function () {

    const liveReloadCheck = document.getElementById('liveReloadCheck');


    liveReloadCheck.onclick = () => {
        const val = liveReloadCheck.checked;
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