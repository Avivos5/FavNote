import { createStore, applyMiddleware } from 'redux';
import notesApp from 'reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash.throttle';

const persistedState = loadState();

const store = createStore(notesApp, persistedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(
    throttle(() => {
        saveState({
            userID: store.getState().userID
        });
    }, 1000)
);

export default store;
