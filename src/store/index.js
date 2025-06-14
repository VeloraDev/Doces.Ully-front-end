import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootReducers from './modules/rootReducers';
import rootSagas from './modules/rootSagas';
import persistReducers from './modules/reduxPersist';

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: persistReducers(rootReducers),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSagas);

export const persistor = persistStore(Store);
export default Store;
