; (function () {
    
    'use strict';

    const liveReloadCheck = document.getElementById('liveReloadCheck');
    const noProxyCheckBox = document.getElementById('noProxyCheckBox');
    const actualServerAddress = document.getElementById('actualServer');
    const liveServerAddress = document.getElementById('liveServer');
    const submitBtn = document.getElementById('submitBtn');

    const serverSetupDiv = document.getElementById('serverSetup');

    function submitForm() {
        const formData = {
            isEnable: liveReloadCheck.checked,
            proxySetup: !noProxyCheckBox.checked,
            actualUrl: actualServerAddress.value || '',
            liveServerUrl: liveServerAddress.value || ''
        }

        chrome.runtime.sendMessage({
            req: 'set-live-server-config',
            data: formData
        });
    }

    liveReloadCheck.onclick = () => {
        submitForm();
    }
    noProxyCheckBox.onchange = () => {
        submitForm();
    }

    noProxyCheckBox.onclick = () => {
        serverSetupDiv.className = noProxyCheckBox.checked ? 'show' : 'hide';
    }

    document.addEventListener('DOMContentLoaded', () => {
        chrome.runtime.sendMessage({
            req: 'get-live-server-config'
        }, (data) => {
            console.log('popupwidnow')
            liveReloadCheck.checked = data.isEnable || false;
            noProxyCheckBox.checked = !data.proxySetup;
            actualServerAddress.value = data.actualUrl || '';
            liveServerAddress.value = data.liveServerUrl || '';
            serverSetupDiv.className =  noProxyCheckBox.checked ? 'show' : 'hide';
        });
    });

    submitBtn.onclick = () => {
        submitForm();
        submitBtn.classList.remove('btn-highlight');
        submitBtn.disabled = true;
    }

    liveServerAddress.onkeyup = actualServerAddress.onkeyup = () => {
        submitBtn.disabled = false;
        submitBtn.classList.add('btn-highlight');
    }


})();