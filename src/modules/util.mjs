// DOM elements
const container = document.querySelector(`.container`);
const loader = container.querySelector(`.loader`);
const controls = container.querySelector(`.controls`);
const sortDefault = container.querySelector(`.sort--default`);
const sortName = container.querySelector(`.sort--name`);
const sortAbv = container.querySelector(`.sort--abv`);
const sortIbu = container.querySelector(`.sort--ibu`);

// Clear list before rendering sort results
const clearPrevList = () => {
    const prevList = container.querySelectorAll(`.item`);
    prevList.forEach((item) => item.remove());
};

// Reset active control style
const clearActiveStyle = () => {
    const activeSort = controls.querySelector('.sort--active');
    if (activeSort) {
        activeSort.classList.remove('sort--active');
    }
};

// Reset page
const resetPage = () => {
    clearActiveStyle();
    clearPrevList();
};

export {loader, sortDefault, sortName, sortAbv, sortIbu, resetPage};
