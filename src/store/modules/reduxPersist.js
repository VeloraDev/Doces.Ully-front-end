import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'DOCES_ULLY',
      storage,
      whitelist: ['auth'],
    },
    reducers
  );

  return persistedReducer;
};
