const initialState = {
    items: [],
    isLoading: false,
}

const pizzas = (state = initialState, action) => {
    if (action.type === "SET_PIZZAS") {
        return {
            ...state,
            items: action.playload,
        }
    }
    return state;
}

export default pizzas;