import { AUTHENTICATE_SUCCES, FETCH_SUCCES, REMOVE_ITEM_SUCCES, ADD_ITEM_SUCCES } from 'actions';

const initialState = {
    userID: '60242c4d60d0a74ece1df35e' //to też jest tymczasowe, stworzone tylko po to żeby nie musieć się logować przy każdym odświeżaniu
};

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REMOVE_ITEM_SUCCES:
            return {
                ...state,
                [payload.itemType]: [
                    ...state[payload.itemType].filter((item) => item._id !== payload.id)
                ]
            };
        case ADD_ITEM_SUCCES:
            return {
                ...state,
                [payload.itemType]: [...state[payload.itemType], payload.data]
            };
        case AUTHENTICATE_SUCCES:
            return {
                ...state,
                userID: payload.data._id
            };
        case FETCH_SUCCES:
            return {
                ...state,
                [payload.itemType]: [...payload.data]
            };

        default:
            return state;
    }
};

export default rootReducer;
