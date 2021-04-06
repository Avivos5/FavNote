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
export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCES = 'ADD_ITEM_SUCCES';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCES = 'LOGOUT_SUCCES';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const removeItem = (itemType, id) => (dispatch) => {
    dispatch({ type: REMOVE_ITEM_REQUEST });

    axios
        .delete(`https://polar-tundra-85645.herokuapp.com/api/note/${id}`)
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

export const addItem = (itemType, itemContent) => (dispatch, getState) => {
    dispatch({ type: ADD_ITEM_REQUEST });

    axios
        .post(`https://polar-tundra-85645.herokuapp.com/api/note/`, {
            userID: getState().userID,
            type: itemType,
            ...itemContent
        })
        .then(({ data }) => {
            dispatch({
                type: ADD_ITEM_SUCCES,
                payload: {
                    itemType,
                    data
                }
            });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: ADD_ITEM_FAILURE });
        });
};

export const authenticate = (username, password) => (dispatch) => {
    dispatch({ type: AUTHENTICATE_REQUEST });

    axios
        .post('https://polar-tundra-85645.herokuapp.com/api/user/login', { username, password })
        .then((payload) => {
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
        .get('https://polar-tundra-85645.herokuapp.com/api/notes/type', {
            params: {
                type: itemType,
                userID: getState().userID
            }
        })
        .then(({ data }) => {
            dispatch({ type: FETCH_SUCCES, payload: { data, itemType } });
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: FETCH_FAILURE });
        });
};

export const logout = (history) => (dispatch) => {
    dispatch({ type: LOGOUT_REQUEST });

    axios
        .post('https://polar-tundra-85645.herokuapp.com/api/user/logout')
        .then(() => {
            dispatch({ type: LOGOUT_SUCCES });
            history.push('/login');
        })
        .catch((err) => {
            console.log(err);
            dispatch({ type: LOGOUT_FAILURE });
        });
};
