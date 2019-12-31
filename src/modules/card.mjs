const cardTemplate = document.querySelector(`#card`).content.querySelector(`.item`);

/**
 * Creates a card from the template
 * @param {Object} item
 * @returns {Node}
 */
const createCard = (item) => {
    const card = cardTemplate.cloneNode(true);
    card.querySelector(`.item__name`).textContent = item.name;
    card.querySelector(`.item__img`).src = item.image_url;
    card.querySelector(`.item__img`).alt = `${item.name} beer`;
    card.querySelector(`.item__tagline`).textContent = item.tagline;
    card.querySelector(`.item__abv`).textContent = item.abv;
    card.querySelector(`.item__ibu`).textContent = item.ibu;
    card.querySelector(`.item__date`).textContent = item.first_brewed.substring(item.first_brewed.length - 4);
    return card;
};

export {createCard};
