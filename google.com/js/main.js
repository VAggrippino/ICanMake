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
    otherAppsButton.addEventListener(`click`, (event) => {
        event.preventDefault();

        let otherAppsFrame = document.querySelector(`.otherAppsFrame`);
        if (otherAppsFrame !== null) { // The otherAppsFrame already exists
            otherAppsFrame.parentNode.removeChild(otherAppsFrame);
            otherAppsButton.classList.remove(`active`);
        } else {
            otherAppsButton.classList.add(`active`);
            otherAppsFrame = document.createElement(`iframe`);
            otherAppsFrame.classList.add(`otherAppsFrame`);
            otherAppsFrame.setAttribute(`src`, `otherApps.html`);

            const container = document.querySelector(`.container`);
            const main = container.querySelector(`.main`);
            container.insertBefore(otherAppsFrame, main);
        }
        
    });
});