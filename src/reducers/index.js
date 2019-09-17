const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title
                }
            ];
        case 'EDIT_ITEM':
            return state.map(item =>
                item.id === action.id ? { id: item.id, title: action.title } : item
            );
        case 'DELETE_ITEM':
            return state.filter(item => item.id !== action.id);
        case 'SET_ITEMS':
            return [...action.items];
        default:
            return state;
    }
}

export default reducer;