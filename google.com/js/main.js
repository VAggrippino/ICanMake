function fetchOtherApps() {
    return fetch(`otherApps.html`)
        .then(response => response.text())
        .then((rt) => {
            const rtDom = new DOMParser().parseFromString(rt, `text/html`);
            console.log(rtDom);
            const icons = rtDom.querySelector(`.otherApps .icons`).outerHTML;
            return icons;
        });
}

window.addEventListener(`load`, () => {
    const otherAppsButton = document.querySelector(`.otherAppsButton`);
    /*
    otherAppsButton.addEventListener(`click`, (e) => {
        e.preventDefault();

        fetchOtherApps().then((icons) => {
            const otherApps = document.createElement(`DIV`);
            otherApps.classList.add(`inline`, `otherApps`);
            otherApps.innerHTML = icons;

            const buttonMiddle = otherAppsButton.offsetLeft + otherAppsButton.offsetWidth / 2;
            const buttonBottom = otherAppsButton.offsetTop + otherAppsButton.offsetHeight;

            const root = document.querySelector(`:root`);
            const rootStyle = getComputedStyle(root);
            const pageWidth = document.body.offsetWidth;
            const dialogWidth = rootStyle.getPropertyValue(`--oaDialogWidth`);
            const oaDialogLeft = `calc(${pageWidth}px - ${dialogWidth} - ${buttonMiddle}px)`;
            root.setProperty(`--oaDialogLeft`, oaDialogLeft);


            document.body.appendChild(otherApps);
        });
    });
    */
})