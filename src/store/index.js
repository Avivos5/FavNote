import { createStore, applyMiddleware } from 'redux';
import notesApp from 'reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(notesApp, composeWithDevTools(applyMiddleware(thunk)));

export default store;
