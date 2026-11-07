export function initSearching(searchField) {
    return (query, state, action) => {
        // @done: #5.2 — применить компаратор
        return state[searchField] ? Object.assign({}, query, {
            search: state[searchField]
        }) : query;
    }
}
