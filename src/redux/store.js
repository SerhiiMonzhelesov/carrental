import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './RootSlice';
import { catalogReducer } from './CatalogSlice';
import { favoriteReducer } from './FavoriteSlice';

const userPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favoriteCarsId'],
};

export const store = configureStore({
  reducer: {
    root: rootReducer,
    catalog: catalogReducer,
    favorites: persistReducer(userPersistConfig, favoriteReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
