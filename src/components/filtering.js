export function initFiltering(elements) {
    const updateIndexes = (elements, indexes) => {
        // @done: #4.1 — заполнить выпадающие списки опциями
        Object.keys(indexes).forEach((elementName) => {
            elements[elementName].append(...Object.values(indexes[elementName]).map(name => {
                const option = document.createElement('option');
                option.textContent = name;
                option.value = name;
                return option;
            }));
        });
    }

    const applyFiltering = (query, state, action) => {
        // @done: #4.2 — обработать очистку поля
        if (action && action.name === 'clear') {
            const input = action.parentElement.querySelector('input');
            const field = action.dataset.field;
            if (input) {
                input.value = '';
            }
            state[field] = '';
        }

        // @done: #4.5 — отфильтровать данные используя компаратор
        const filter = {};
        Object.keys(elements).forEach(key => {
            if (elements[key]) {
                if (['INPUT', 'SELECT'].includes(elements[key].tagName) && elements[key].value) {
                    filter[`filter[${elements[key].name}]`] = elements[key].value;
                }
            }
        });

        return Object.keys(filter).length ? Object.assign({}, query, filter) : query;
    }

    return {
        updateIndexes,
        applyFiltering
    }
}
