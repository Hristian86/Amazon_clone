import { ADD_TO_BASKET, REMOVE_ITEM_FROM_BASKET, GET_ITEMS, CHEK_USER, REMOVE_USER } from "./Types";

// initail state of the app

export const initialState = {
    basket: [],
    user: [],
    FetchData: [],
};

const removeReducer = (state) => {

    const newState = state.user

    return newState
}

const Reducer = (state, action) => {
    //console.log(action);
    switch (action.type) {
        case REMOVE_USER:
            // removing user
            console.log(state);
            return {
                ...state,
                user: [...state.user.filter(i => i.user == "asd")]
            };
            break;
        case CHEK_USER:
            // get user here
            return {
                ...state,
                user: [...state.user, action.user]
            };
            break;
        case GET_ITEMS:
            // get items from back end
            return {
                ...state,
                FetchData: [...state.FetchData, action.items]
            };
            break;
        case REMOVE_ITEM_FROM_BASKET:
            // get items from back end
            return {
                ...state,
                basket: [...state.basket.filter(x => x.id !== action.removefromBasket.id)]
            };
            break;
        case ADD_TO_BASKET:
            // adding items to basek
            return {
                ...state,
                basket: [...state.basket, action.items]
            };
            break;
        default:
            return state;
    }
}

export default Reducer;