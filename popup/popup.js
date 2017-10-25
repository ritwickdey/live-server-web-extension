; (function () {

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
        // const val = liveReloadCheck.checked;
        // chrome.runtime.sendMessage({
        //     status: 'set-checkbox-status',
        //     value: val
        // });
        submitForm();
    }
    proxyCheckBox.onclick = () => {
        serverSetupDiv.className = proxyCheckBox.checked ? 'show' : 'hide';
    }

    document.addEventListener('DOMContentLoaded', () => {
        // chrome.runtime.sendMessage({
        //     status: 'get-checkbox-status'
        // }, (res) => {
        //     liveReloadCheck.checked = res.value;
        //     serverSetupDiv.className = res.value ? 'show' : 'hide';
        // });
        chrome.runtime.sendMessage({
            req: 'get-live-server-config'
        }, (data) => {
            liveReloadCheck.checked = data.isEnable || false;
            proxyCheckBox.checked = data.proxySetup || false;
            actualServerAddress.value = data.actualUrl || '';
            liveServerAddress.value = data.liveServerUrl || '';
            serverSetupDiv.className = data.value ? 'show' : 'hide';
        });
    });

    submitBtn.onclick = () => {
        submitForm();
        submitBtn.classList.remove('btn-highlight');
    }

    actualServerAddress.onkeyup = () => {
        submitBtn.classList.add('btn-highlight');
    }

    liveServerAddress.onkeyup = () => {
        submitBtn.classList.add('btn-highlight');
    }


})();