import {createCard} from "./card.mjs";

const fragment = document.createDocumentFragment();
const list = document.querySelector(`.list`);

/**
 * Renders a list of items
 * @param {Array.<Object>} items
 */
const render = (items) => {
    items.forEach((item) => fragment.append(createCard(item)));
    list.append(fragment);
};

export {render};
