import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../Reducer/index.js';
// nueva información
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

const persistConfig = {
    key: 'persist-key',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store)


// export const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

export default store;
export {persistor}