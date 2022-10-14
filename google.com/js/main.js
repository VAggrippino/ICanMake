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

            setTimeout(() => window.addEventListener(`click`, removeOtherAppsFrame), 0);
        }
        
    });
});

let removeOtherAppsFrame;
removeOtherAppsFrame = () => {
    const otherAppsFrame = document.querySelector(`.otherAppsFrame`);
    otherAppsFrame.parentNode.removeChild(otherAppsFrame);
    window.removeEventListener(`click`, removeOtherAppsFrame);

    const otherAppsButton = document.querySelector(`.otherAppsButton`);
    otherAppsButton.classList.remove(`active`);
}