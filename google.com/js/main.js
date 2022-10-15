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

    const geolocationCountry = document.querySelector(`.geolocation--country`);
    fetch(`https://www.aggrippino.com/ipgeolocation.php`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Response was not ok.`);
            }
            return response.json();
        })
        .then((data) => {
            geolocationCountry.innerHTML = data.country_name;

            const info = document.querySelector(`.geolocation--info`);
            const table = info.querySelector(`table`);
            for (const key in data) {
                const tr = document.createElement(`tr`);
                const th = document.createElement(`th`);
                const td = document.createElement(`td`);

                th.appendChild(document.createTextNode(key));
                td.appendChild(document.createTextNode(data[key]));

                tr.appendChild(th);
                tr.appendChild(td);
                table.appendChild(tr);
            }
        })
        .catch((error) => {
            geolocationCountry.innerHTML = `<span class="error">&lt;Unavailable&gt; (Request Blocked?)</span>`;
            console.error(`An error occurred during fetch operation: `, error);
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