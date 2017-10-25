; (function () {
    
    'use strict';

    const liveReloadCheck = document.getElementById('liveReloadCheck');
    const proxyCheckBox = document.getElementById('proxyCheckBox');
    const actualServerAddress = document.getElementById('actualServer');
    const liveServerAddress = document.getElementById('liveServer');
    const submitBtn = document.getElementById('submitBtn');

    const serverSetupDiv = document.getElementById('serverSetup');

    function submitForm() {
        const formData = {
            isEnable: liveReloadCheck.checked,
            proxySetup: proxyCheckBox.checked,
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
    proxyCheckBox.onchange = () => {
        submitForm();
    }

    proxyCheckBox.onclick = () => {
        serverSetupDiv.className = proxyCheckBox.checked ? 'show' : 'hide';
    }

    document.addEventListener('DOMContentLoaded', () => {
        chrome.runtime.sendMessage({
            req: 'get-live-server-config'
        }, (data) => {
            liveReloadCheck.checked = data.isEnable || false;
            proxyCheckBox.checked = data.proxySetup || false;
            actualServerAddress.value = data.actualUrl || '';
            liveServerAddress.value = data.liveServerUrl || '';
            serverSetupDiv.className =  proxyCheckBox.checked ? 'show' : 'hide';
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