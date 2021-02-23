import axios from 'axios';

export const ADD_ITEM = 'ADD_ITEM';
export const AUTHENTICATE_REQUEST = 'AUTHENTICATE_REQUEST';
export const AUTHENTICATE_SUCCES = 'AUTHENTICATE_SUCCES';
export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE';
export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCES = 'FETCH_SUCCES';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM_SUCCES = 'REMOVE_ITEM_SUCCES';
export const REMOVE_ITEM_FAILURE = 'REMOVE_ITEM_FAILURE';

export const removeItem = (itemType, id) => (dispatch) => {
    dispatch({ type: REMOVE_ITEM_REQUEST });

    axios
        .delete(`http://localhost:9000/api/note/${id}`)
        .then(() => {
            dispatch({
                type: REMOVE_ITEM_SUCCES,
                payload: {
                    itemType,
                    id
                }
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: REMOVE_ITEM_FAILURE });
        });
};

export const addItem = (itemType, itemContent) => {
    const getId = () => `_${Math.random().toString(36).substr(2, 9)}`; //prosta funkcja generująca unikalne ID

    return {
        type: ADD_ITEM,
        payload: {
            itemType,
            item: {
                id: getId(),
                ...itemContent
            }
        }
    };
};

export const authenticate = (username, password) => (dispatch) => {
    dispatch({ type: AUTHENTICATE_REQUEST });

    axios
        .post('http://localhost:9000/api/user/login', { username, password })
        .then((payload) => {
            console.log(payload);
            dispatch({ type: AUTHENTICATE_SUCCES, payload });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: AUTHENTICATE_FAILURE });
        });
};

export const fetchItems = (itemType) => (dispatch, getState) => {
    dispatch({ type: FETCH_REQUEST });

    axios
        .get('http://localhost:9000/api/notes/type', {
            params: {
                type: itemType,
                userID: getState().userID
            }
        })
        .then(({ data }) => {
            console.log(data);
            dispatch({ type: FETCH_SUCCES, payload: { data, itemType } });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: FETCH_FAILURE });
        });
};
