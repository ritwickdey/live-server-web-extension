; (function () {
    
    'use strict';

    const liveReloadCheck = document.getElementById('liveReloadCheck');
    const noProxyCheckBox = document.getElementById('noProxyCheckBox');
    const actualServerAddress = document.getElementById('actualServer');
    const liveServerPort = document.getElementById('liveServerPort');
    const submitBtn = document.getElementById('submitBtn');
    const liveServerConnBtn = document.getElementById('liveServerConnBtn');

    const serverSetupDiv = document.getElementById('serverSetup');

    function submitForm() {
        const formData = {
            isEnable: liveReloadCheck.checked,
            proxySetup: !noProxyCheckBox.checked,
            actualUrl: actualServerAddress.value || '',
            // liveServerUrl: `http://127.0.0.1:${liveServerPort.value}`,
            liveServerPort: liveServerPort.value
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
            liveServerPort.value = data.liveServerPort || 5500;
            serverSetupDiv.className =  noProxyCheckBox.checked ? 'show' : 'hide';
        });
    });

    submitBtn.onclick = () => {
        submitForm();
        submitBtn.classList.remove('btn-highlight');
        submitBtn.disabled = true;
    }

    liveServerPort.onkeyup = actualServerAddress.onkeyup = () => {
        submitBtn.disabled = false;
        submitBtn.classList.add('btn-highlight');
        liveServerConnBtn.innerText = 'Test Connection';
        liveServerConnBtn.classList.remove('connected');
        liveServerConnBtn.classList.remove('not-connected');
    }

    liveServerConnBtn.onclick = () => {
        liveServerConnBtn.innerText = "Testing...";

        const ws = new WebSocket(`ws://127.0.0.1:${liveServerPort.value}/ws`)
        ws.onerror = () =>  {
            liveServerConnBtn.classList.remove('connected');
            liveServerConnBtn.classList.add('not-connected');
            liveServerConnBtn.innerText = "Not Connected"
            console.log('not connected');
        }
        ws.onmessage = () =>  {
            liveServerConnBtn.classList.add('connected');
            liveServerConnBtn.classList.remove('not-connected');
            liveServerConnBtn.innerText = "Connected"
            console.log('connected');
            ws.close();
        }
    };


})();