import {beers} from "./api.mjs";
import {resetPage} from "./util.mjs";
import {render} from "./render.mjs";

const SORT_TYPE = {
    NAME: `name`,
    ABV: `abv`,
    IBU: `ibu`,
};

/**
 * Sorts array elements in descending order by property that has a value of type string
 * @param {Array.<Object>} list
 * @param {string} prop
 * @return {Array}
 */
const sortByPropStrAsc = (list, prop) => list.slice().sort((a,b) => {
    const propA = a[prop].toUpperCase();
    const propB = b[prop].toUpperCase();

    let comparison = 0;
    if (propA > propB) {
        comparison = 1;
    } else if (propA < propB) {
        comparison = -1;
    }
    return comparison;
});

/**
 * Sorts array elements in descending order by property that has a value of type number
 * @param {Array.<Object>} list
 * @param {string} prop
 * @return {Array}
 */
const sortByPropNumDesc = (list, prop) => list.slice().sort((a, b) => b[prop] - a[prop]);


// Sorting event handlers
const onSortDefaultClick = (e) => {
    e.preventDefault();
    resetPage();
    e.target.classList.add('sort--active');
    render(beers);
};

const onSortNameClick = (e) => {
    e.preventDefault();
    resetPage();
    e.target.classList.add('sort--active');
    render(sortByPropStrAsc(beers, SORT_TYPE.NAME));
};

const onSortAbvClick = (e) => {
    e.preventDefault();
    resetPage();
    e.target.classList.add('sort--active');
    render(sortByPropNumDesc(beers, SORT_TYPE.ABV));
};

const onSortIbuClick = (e) => {
    e.preventDefault();
    resetPage();
    e.target.classList.add('sort--active');
    render(sortByPropNumDesc(beers, SORT_TYPE.IBU));
};

export {onSortDefaultClick, onSortNameClick, onSortAbvClick, onSortIbuClick};
