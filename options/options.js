; (function () {
    const liveReloadCheck = document.getElementById('liveReloadCheck');
    const SETUP_STRING = 'live-reload-extension-setup';

    liveReloadCheck.onclick = () =>
        localStorage.setItem(SETUP_STRING, liveReloadCheck.checked);

    liveReloadCheck.checked = localStorage.getItem(SETUP_STRING) === 'true';
})();