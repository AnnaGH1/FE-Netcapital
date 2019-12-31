import {loader, sortDefault, sortName, sortAbv, sortIbu,} from "./util.mjs";
import {render} from "./render.mjs";
import {onSortDefaultClick, onSortNameClick, onSortAbvClick, onSortIbuClick} from "./sort.mjs";

const URL = `https://api.punkapi.com/v2/beers`;
let beers = null;

const load = (endpoint) => {
    return fetch(endpoint)
        .then((response) => response.json())
        .then((json) => {
            beers = json;
            render(json);

            // Hide loader
            loader.classList.add('hidden');

            // Register event listeners - sorting
            sortDefault.addEventListener(`click`, onSortDefaultClick);
            sortName.addEventListener(`click`, onSortNameClick);
            sortAbv.addEventListener(`click`, onSortAbvClick);
            sortIbu.addEventListener(`click`, onSortIbuClick);

        })
        .catch((err) => {
            throw err;
        });
};

export {URL, beers, load};
